import { useForm } from 'react-hook-form';
import { Modal } from 'react-responsive-modal';
import { zodResolver } from '@hookform/resolvers/zod';

import { toast } from '@/components/layout/use-toast';
import { PaletteIcon, Trash2Icon } from 'lucide-react';

import z from 'zod';
import {
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Form,
} from '@/components/layout/form';
import { blockColors } from './styles';
import { type Event } from '@/models/events';
import { useEffect, useState } from 'react';
import { ComboBox } from '../combo-box';
import { weekDays, weekPeriods } from '@/common/constants';
import { PopoverPicker } from '../color-picker';
import { API } from '@/services/api/axios';
import { type AxiosError, HttpStatusCode } from 'axios';
import { Input } from '../layout/input';
import InputMask from 'react-input-mask';
import { compareHourIsGtHour, getAmPmFromHour } from '@/utils/date';
import { Button } from '../buttons/button';

interface ClassModalProps {
  name?: string;
  isModalOpen: boolean;
  onModalClose: () => void;
  data?: Event;
  type: 'create' | 'update';
}

const modalstyles = {
  modal: {
    width: '20rem',
  },
};

const FormSchema = z.object({
  summary: z.string({
    required_error: 'Por favor preencha o nome do evento.',
  }),
  day_week: z.string({
    required_error: 'Por favor selecione Dia/Semana.',
  }),
  day_period: z.string({
    required_error: 'Por favor selecione Dia/Período.',
  }),
  start_at: z.string({
    required_error: 'Por favor preencha Hora/Início.',
  }),
  end_at: z.string({
    required_error: 'Por favor preencha Hora/Fim.',
  }),
  color: z
    .string({
      required_error: 'Por favor selecione uma cor.',
    })
    .optional(),
});

export function EventModal({
  name = 'Aula',
  type = 'create',
  isModalOpen,
  onModalClose,
  data,
}: ClassModalProps) {
  const [isModalOpenIntern, setIsModalOpenIntern] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      summary: data?.summary,
      day_week: data?.day_week,
      day_period: data?.day_period,
      start_at: data?.start_at,
      end_at: data?.end_at,
      color: data?.color,
    },
  });

  useEffect(() => {
    setIsModalOpenIntern(isModalOpen);
  }, [isModalOpen]);

  useEffect(() => {
    if (type === 'update') {
      if (data?.summary) {
        form.setValue('summary', data.summary);
      }
      if (data?.color) {
        form.setValue('color', data.color);
      }
      if (data?.day_week) {
        form.setValue('day_week', data.day_week);
      }
      if (data?.day_period) {
        form.setValue('day_period', data.day_period);
      }
      if (data?.start_at) {
        form.setValue('end_at', data.start_at);
      }
      if (data?.end_at) {
        form.setValue('end_at', data.end_at);
      }
    }

    if (type === 'create') {
      form.reset();
      form.setValue('summary', 'Aula');
    }
  }, [data]);

  const getTitle = () => {
    return type === 'create' ? 'Criar evento' : 'Alterar evento';
  };

  async function create(formData: z.infer<typeof FormSchema>) {
    try {
      setIsLoading(true);
      await API.post('events', formData);
      toast({
        title: 'Evento criado com sucesso!',
        variant: 'sucess',
      });
      setIsModalOpenIntern(false);
      onModalClose();
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      if (err) {
        const erroAxios = err as AxiosError<{ message: string }>;

        if (
          erroAxios?.response?.status === HttpStatusCode.BadRequest &&
          erroAxios?.response?.data?.message
        ) {
          const messageError = err.response.data.message as string;
          if (messageError) {
            toast({
              title: messageError,
              variant: 'destructive',
            });
            return;
          }
        }
      }
      toast({
        title: 'Houve algum problema!',
        variant: 'destructive',
      });
    }
  }

  async function update(formData: Event) {
    try {
      setIsLoading(true);
      await API.put(`events/${data?.id}`, formData);
      toast({
        title: 'Evento alterado com sucesso!',
        variant: 'sucess',
      });
      setIsModalOpenIntern(false);
      onModalClose();
      setIsLoading(false);
    } catch (err: any) {
      setIsLoading(false);
      if (err) {
        const erroAxios = err as AxiosError<{ message: string }>;

        if (
          erroAxios?.response?.status === HttpStatusCode.BadRequest &&
          erroAxios?.response?.data?.message
        ) {
          const messageError = err.response.data.message as string;
          if (messageError) {
            toast({
              title: messageError,
              variant: 'destructive',
            });
            return;
          }
        }
      }
      toast({
        title: 'Houve algum problema!',
        variant: 'destructive',
      });
    }
  }

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    const dataParsed: z.infer<typeof FormSchema> = {
      ...data,
      start_at: `${data?.start_at}:00`,
      end_at: `${data?.end_at}:00`,
    };

    if (!compareHourIsGtHour(data.end_at, data.start_at)) {
      toast({
        title: 'Hora/Fim precisa ser maior que Hora/Ínicio',
        variant: 'destructive',
      });
      return;
    }

    if (type === 'create') {
      await create(dataParsed);
    }
    if (type === 'update') {
      await update(dataParsed as Event);
    }
  }

  return (
    <Modal
      styles={modalstyles}
      open={isModalOpenIntern}
      onClose={onModalClose}
      center
    >
      <h2 className="mb-2 text-center">{getTitle()}</h2>
      <div className="text-title">
        <div className="flex flex-col gap-1 mb-5 text-sm">
          {type === 'update' && (
            <div>
              <Trash2Icon
                className="cursor-pointer"
                color="var(--color-danger)"
              />
            </div>
          )}
        </div>
        <div>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="flex flex-col w-full p-4 space-y-3 border rounded"
            >
              <FormField
                control={form.control}
                name="summary"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Evento:</FormLabel>
                    <Input
                      defaultValue={field.value}
                      onChange={field.onChange}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="day_week"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dia/Semana:</FormLabel>
                    <ComboBox
                      defaultValue={data?.day_week}
                      emptyLabel="dia/semana..."
                      options={weekDays.PT.map((w) => ({
                        label: w.name,
                        value: w.value,
                      }))}
                      onSelect={field.onChange}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="day_period"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Dia/Período:</FormLabel>
                    <ComboBox
                      defaultValue={data?.day_period}
                      emptyLabel="dia/período..."
                      options={weekPeriods.PT.map((w) => ({
                        label: w.name,
                        value: w.value,
                      }))}
                      onSelect={field.onChange}
                    />
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="start_at"
                render={({ field }) => {
                  const startsWithTwo = field.value?.startsWith('2');
                  const mask = [
                    /[0-2]/,
                    startsWithTwo ? /[0-3]/ : /[0-9]/,
                    ':',
                    /[0-5]/,
                    /[0-9]/,
                  ];

                  const maskRegex = new RegExp(
                    /[0-2]/.source +
                      (startsWithTwo ? /[0-3]/.source : /[0-9]/.source) +
                      ':' +
                      /[0-5]/.source +
                      /[0-9]/.source
                  );

                  const ok = maskRegex.test(field.value);

                  let amPm = '';
                  if (ok) {
                    amPm = getAmPmFromHour(`${field.value}:00`);
                  }

                  return (
                    <FormItem>
                      <FormLabel>Hora/Início: {amPm}</FormLabel>
                      <div>
                        <InputMask
                          className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border rounded-md border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          mask={mask}
                          onBlur={(value) => {
                            const ok = maskRegex.test(
                              value.currentTarget?.value
                            );

                            if (!ok) {
                              field.onChange(undefined);
                            }
                          }}
                          onChange={(value) => {
                            field.onChange(
                              value.currentTarget.value !== ''
                                ? value
                                : undefined
                            );
                          }}
                          defaultValue={field.value}
                          placeholder="hora..."
                        />
                      </div>

                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="end_at"
                render={({ field }) => {
                  const startsWithTwo = field.value?.startsWith('2');
                  const mask = [
                    /[0-2]/,
                    startsWithTwo ? /[0-3]/ : /[0-9]/,
                    ':',
                    /[0-5]/,
                    /[0-9]/,
                  ];

                  const maskRegex = new RegExp(
                    /[0-2]/.source +
                      (startsWithTwo ? /[0-3]/.source : /[0-9]/.source) +
                      ':' +
                      /[0-5]/.source +
                      /[0-9]/.source
                  );

                  const ok = maskRegex.test(field.value);

                  let amPm = '';
                  if (ok) {
                    amPm = getAmPmFromHour(`${field.value}:00`);
                  }

                  return (
                    <FormItem>
                      <FormLabel>Hora/Fim: {amPm}</FormLabel>
                      <InputMask
                        className="flex w-full h-10 px-3 py-2 text-sm bg-transparent border rounded-md border-input ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        mask={mask}
                        onBlur={(value) => {
                          const ok = maskRegex.test(value.currentTarget?.value);

                          if (!ok) {
                            field.onChange(undefined);
                          }
                        }}
                        onChange={(value) => {
                          field.onChange(
                            value.currentTarget.value !== '' ? value : undefined
                          );
                        }}
                        defaultValue={field.value}
                        placeholder="hora..."
                      />
                      <FormMessage />
                    </FormItem>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="color"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Cor:</FormLabel>
                    <div className="flex gap-1">
                      <PopoverPicker
                        color={field.value ?? '#fff'}
                        onChange={field.onChange}
                      />
                      <PaletteIcon />
                    </div>
                    <div className="flex flex-wrap justify-start gap-1">
                      {blockColors.map(({ styles, color }) => (
                        <div
                          onClick={() => {
                            form.setValue('color', color);
                          }}
                          key={color}
                          style={{ backgroundColor: color }}
                          className={`${styles}`}
                        ></div>
                      ))}
                    </div>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button
                disabled={isLoading}
                title="Salvar"
                isLoading={isLoading}
                type="submit"
              />
            </form>
          </Form>
        </div>
      </div>
    </Modal>
  );
}

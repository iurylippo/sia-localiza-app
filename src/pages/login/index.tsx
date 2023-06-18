'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import z from 'zod';
import { useEffect } from 'react';
import { useUserAuth } from '@/hooks/useUserAuth';
import { HttpStatusCode } from 'axios';
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/layout/form';
import { Input } from '@/components/layout/input';
import { Button } from '@/components/buttons/button';
import { siaLocalizaLogo } from '@/assets';
import { toast } from '@/components/layout/use-toast';
import { LinkedinIcon } from 'lucide-react';

const FormSchema = z.object({
  email: z
    .string({
      required_error: 'Por favor preencha o email.',
    })
    .email({ message: 'Email mal formatado.' }),
  password: z.string({
    required_error: 'Por favor selecione o password.',
  }),
});

export function Login() {
  const { refreshTokenAutomation, userSignInMutation, isLoading } =
    useUserAuth();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    try {
      const { data: result } = await userSignInMutation.mutateAsync(data);

      if (result) {
        // toast.success(`Bem vindo de volta, ${result?.user.name}!`)
        console.log(`Bem vindo de volta, ${result?.user?.name}!`);
        localStorage.setItem('name', result?.user?.name);
        window.location.href = '/map';
      }
    } catch (error: any) {
      if (
        error?.response &&
        error.response.status === HttpStatusCode.Unauthorized
      ) {
        toast({
          title: 'email ou senha inválidos!',
          variant: 'alert',
        });
        return;
      }

      toast({
        title: 'Ocorreu um erro inesperado, tente novamente.',
        variant: 'destructive',
      });
    }
  }

  useEffect(() => {
    (async () => {
      const token = await refreshTokenAutomation(false);

      if (token) {
        const actualPath = location.pathname;
        if (actualPath === '/') {
          window.location.href = '/mapa';
        }
        return;
      }

      localStorage.clear();
    })();
  }, []);

  return (
    <section className="flex items-center justify-center h-screen lg:h-full gradient-form bg-neutral-200 dark:bg-neutral-700">
      <div className="container py-4">
        <div className="flex flex-wrap items-center justify-center g-6 text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block bg-white rounded-lg shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                <div className="px-4 md:px-0 lg:w-6/12">
                  <div className=" md:mx-6">
                    <div className="text-center">
                      <img
                        className="w-48 mx-auto rounded"
                        src={siaLocalizaLogo}
                        alt="logo"
                      />
                      <h4 className="pb-1 mt-1 mb-12 text-xl font-bold text-title">
                        Sia Localiza
                      </h4>
                    </div>
                    <Form {...form}>
                      <form
                        className="h-full "
                        onSubmit={form.handleSubmit(onSubmit)}
                      >
                        <p className="mb-4">Forneça os dados abaixo:</p>
                        <div
                          className="relative mb-4"
                          data-te-input-wrapper-init
                        >
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email:</FormLabel>
                                <Input
                                  defaultValue={field.value}
                                  onChange={field.onChange}
                                />
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div
                          className="relative mb-4"
                          data-te-input-wrapper-init
                        >
                          <FormField
                            control={form.control}
                            name="password"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Password:</FormLabel>
                                <Input
                                  type="password"
                                  defaultValue={field.value}
                                  onChange={field.onChange}
                                />
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="pt-1 pb-1 mb-12 text-center">
                          <Button
                            isLoading={isLoading}
                            title="Login"
                            type="submit"
                            style={{
                              background:
                                'linear-gradient(to right, #24bbca, #51bdea)',
                            }}
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                          />

                          <a href="#!">Esqueceu senha?</a>
                        </div>
                        <div className="flex items-center justify-between pb-6">
                          <p className="mb-0 mr-2">não tem conta?</p>
                          {/* isLoading */}
                          <Button
                            isOutline={true}
                            title="Registrar"
                            type="submit"
                          />
                        </div>
                      </form>
                    </Form>
                  </div>
                </div>

                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    background: 'linear-gradient(to right, #24bbca, #51bdea)',
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <header>
                      <h4 className="mb-6 text-xl font-semibold">
                        Projeto desenvolvido para facilitar a localização das
                        salas do campus de uma forma dinâmica.
                      </h4>
                    </header>
                    <div>
                      <p className="mb-4 font-semibold text-md">Créditos:</p>
                      <div>
                        <div className="flex items-center mb-2">
                          <a
                            className="flex"
                            href="https://www.linkedin.com/in/iurylippo"
                            target="__blank"
                          >
                            <LinkedinIcon className="mr-2" size={15} />
                            <span>Iury Lippo</span>
                          </a>
                        </div>
                        <div className="flex items-center mb-2">
                          <a
                            className="flex"
                            href="https://www.linkedin.com/in/gabriel-pereira-da-silva-2784b3175"
                            target="__blank"
                          >
                            <LinkedinIcon className="mr-2" size={15} />
                            <span>Gabriel Pereira</span>
                          </a>
                        </div>
                        <div className="flex items-center mb-2">
                          <a
                            className="flex"
                            href="https://www.linkedin.com/in/lucas-fonseca-59a55a163"
                            target="__blank"
                          >
                            <LinkedinIcon className="mr-2" size={15} />
                            <span>Lucas Fonseca</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

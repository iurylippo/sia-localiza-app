import { PageControl } from '@/components/page-control/indext';
import CalendComponent from '@/components/calendar';
import { type ComponentProps } from 'react';

const wrapper: ComponentProps<'div'>['className'] =
  'flex flex-col w-full h-screen';

const calendarWrapper =
  'flex w-full h-full sm:max-h-[70%] md:max-h-[80%] max-w-[850px] border mx-auto rounded-md justify-center items-center bg-white flex-col';

export default function Calendar(props?: any) {
  return (
    <div>
      <PageControl title="Agenda" />
      <div className={wrapper}>
        <div className={calendarWrapper}>
          <CalendComponent isDark={false} />
        </div>
      </div>
    </div>
  );
}

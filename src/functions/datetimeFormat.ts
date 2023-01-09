import dayjs from 'dayjs';
import 'dayjs/locale/ja';

dayjs.locale('ja');

export default function (date?: string | number | Date | dayjs.Dayjs | null | undefined, format?: string) {
    return dayjs(date).format(format);
}

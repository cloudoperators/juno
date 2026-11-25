import { DateOption as FlatpickrDateOption, DateLimit as FlatpickrDateLimit } from 'flatpickr/dist/types/options';
import { key as FlatpickrLocaleKey, CustomLocale as FlatpickrCustomLocale } from 'flatpickr/dist/types/locale';
import { DateOption, DateLimit, LocaleKey, CustomLocale } from './DateTimePicker.types';
/**
 * Maps public DateTimePicker date option to flatpickr DateOption.
 * Both types are structurally identical (string | Date | number),
 * but TypeScript treats them as distinct types.
 */
export declare function mapDateOption(date: DateOption): FlatpickrDateOption;
/**
 * Maps public DateTimePicker date limit to flatpickr DateLimit.
 * Handles simple dates, date ranges, and filter functions.
 */
export declare function mapDateLimit(limit: DateLimit): FlatpickrDateLimit<FlatpickrDateOption>;
/**
 * Maps array of public DateTimePicker date limits to flatpickr DateLimit array.
 */
export declare function mapDateLimits(limits: DateLimit[]): FlatpickrDateLimit<FlatpickrDateOption>[];
/**
 * Maps public DateTimePicker locale to flatpickr locale.
 * Handles both locale key strings and custom locale objects.
 */
export declare function mapLocale(locale: LocaleKey | Partial<CustomLocale>): FlatpickrLocaleKey | Partial<FlatpickrCustomLocale>;
//# sourceMappingURL=DateTimePicker.mappers.d.ts.map
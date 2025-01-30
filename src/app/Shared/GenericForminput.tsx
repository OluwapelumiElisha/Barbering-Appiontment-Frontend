import React from 'react';
import { UseFormReturn, FieldValues, Path } from 'react-hook-form'; // Import Path
import { 
  FormDescription, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Textarea } from '@/components/ui/textarea';

// Define the type for options used in select fields
type OptionType = {
  value: string;
  label: string;
};

// Define the props type for GenericFormInput using a generic type
interface GenericFormInputProps<TFieldValues extends FieldValues> {
  placeholder: string;
  form: UseFormReturn<TFieldValues>; // Ensure strong typing for form
  label: string;
  name: Path<TFieldValues>; // Use Path type for name
  type: 'text' | 'password' | 'email' | 'number' | 'textarea' | 'select';
  required?: boolean;
  description?: string;
  options?: OptionType[];
}

// Make the component accept a generic type for form fields
const GenericFormInput = <TFieldValues extends FieldValues>({
  placeholder,
  form,
  label,
  name,
  type,
  required,
  description,
  options,
}: GenericFormInputProps<TFieldValues>) => {
  switch (type) {
    case 'text':
    case 'password':
    case 'email':
    case 'number':
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <Input placeholder={placeholder} type={type} {...field} required={required} />
              <FormMessage />
              {description && <FormDescription>{description}</FormDescription>}
            </FormItem>
          )}
        />
      );

    case 'textarea':
      return (
        <FormField
          control={form.control}
          name={name}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{label}</FormLabel>
              <Textarea placeholder={placeholder} className="resize-none" {...field} required={required} />
              <FormMessage />
              {description && <FormDescription>{description}</FormDescription>}
            </FormItem>
          )}
        />
      );

    case 'select':
      if (options) {
        return (
          <FormField
            control={form.control}
            name={name}
            render={({ field }) => (
              <FormItem>
                <FormLabel>{label}</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <SelectTrigger>
                    <SelectValue placeholder={placeholder} />
                  </SelectTrigger>
                  <SelectContent>
                    {options.map((opt, i) => (
                      <SelectItem key={i} value={opt.value}>
                        {opt.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
                {description && <FormDescription>{description}</FormDescription>}
              </FormItem>
            )}
          />
        );
      }
      break;

    default:
      return null;
  }
};

export default GenericFormInput;

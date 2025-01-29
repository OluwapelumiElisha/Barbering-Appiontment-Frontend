import React from 'react';
import { UseFormReturn } from 'react-hook-form'; // Import the type for the form
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

// Define the props type for GenericFormInput
interface GenericFormInputProps {
  placeholder: string;
  form: UseFormReturn<any>; // Type from react-hook-form
  label: string;
  name: string;
  type: 'text' | 'password' | 'email' | 'number' | 'textarea' | 'select'; // Restrict to valid types
  required?: boolean;
  description?: string;
  options?: OptionType[]; // For select options
  option?: OptionType[]; // For radio button options (commented out in your code)
}

const GenericFormInput: React.FC<GenericFormInputProps> = ({
  placeholder,
  form,
  label,
  name,
  type,
  required,
  description,
  options,
}) => {
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
      return null; // Return null if the type doesn't match
  }
};

export default GenericFormInput;

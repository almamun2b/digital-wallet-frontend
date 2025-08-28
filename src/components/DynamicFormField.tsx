import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import type { FC, ReactNode } from "react";
import {
  type ControllerRenderProps,
  type FieldValues,
  useFormContext,
} from "react-hook-form";

interface DynamicFormFieldProps {
  name: string;
  label?: string;
  description?: string;
  children: (
    fieldProps: ControllerRenderProps<FieldValues, string>
  ) => ReactNode;
}

const DynamicFormField: FC<DynamicFormFieldProps> = ({
  name,
  label,
  description,
  children,
}) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && <FormLabel>{label}</FormLabel>}
          <FormControl>{children(field)}</FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { DynamicFormField };

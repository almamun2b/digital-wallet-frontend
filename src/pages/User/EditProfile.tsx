import { DynamicFormField } from "@/components/DynamicFormField";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useUserInfoQuery } from "@/redux/features/auth/auth.api";
import { useUpdateProfileMutation } from "@/redux/features/user/user.api";
import type { IErrorResponse } from "@/types";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

const editProfileSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z
    .string()
    .min(11, "Phone number must be at least 11 digits")
    .regex(
      /^(?:\+8801[3-9]\d{8}|01[3-9]\d{8})$/,
      "Please enter a valid Bangladeshi phone number"
    ),
  address: z.string().min(2, "Address must be at least 2 characters"),
});

type EditProfileFormData = z.infer<typeof editProfileSchema>;

export default function EditProfile() {
  const { data: user } = useUserInfoQuery();
  const [updateProfile, { isLoading: isUserLoading }] =
    useUpdateProfileMutation();

  const form = useForm<EditProfileFormData>({
    resolver: zodResolver(editProfileSchema),
    mode: "onChange",
    reValidateMode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      address: "",
    },
  });

  useEffect(() => {
    if (user?.data) {
      form.reset({
        name: user.data.name || "",
        email: user.data.email || "",
        phone: user.data.phone || "",
        address: user.data.address || "",
      });
    }
  }, [user, form]);

  const onSubmit = async (values: EditProfileFormData) => {
    try {
      const res = await updateProfile(values).unwrap();
      if (res.success) {
        toast.success(res.message || "Profile updated successfully!");
      }
    } catch (error) {
      console.error("Failed to update profile:", error);
      toast.error(
        (error as IErrorResponse).message || "Failed to update profile"
      );
    }
  };

  return (
    <main className="bg-background">
      {/* Header Section */}
      <section className="py-16 text-center">
        <div className="mx-auto container px-4 lg:px-8 max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight text-foreground">
            Edit Profile
          </h1>
          <p className="mt-4 text-lg text-muted-foreground">
            Update your account information below.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="pb-24">
        <div className="mx-auto container px-4 lg:px-8 max-w-2xl">
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-6 rounded-2xl border bg-card p-8 shadow-sm"
            >
              <DynamicFormField
                name="name"
                label="Full Name *"
                children={(field) => (
                  <Input {...field} placeholder="Your full name" />
                )}
              />

              <DynamicFormField
                name="email"
                label="Email Address *"
                children={(field) => (
                  <Input
                    {...field}
                    type="email"
                    placeholder="you@example.com"
                  />
                )}
              />

              <DynamicFormField
                name="phone"
                label="Phone Number *"
                description="Format: +8801XXXXXXXXX or 01XXXXXXXXX"
                children={(field) => (
                  <Input {...field} placeholder="+8801XXXXXXXXX" />
                )}
              />

              <DynamicFormField
                name="address"
                label="Address *"
                children={(field) => (
                  <Textarea
                    {...field}
                    placeholder="Your address..."
                    className="min-h-[80px]"
                  />
                )}
              />

              <Button
                type="submit"
                disabled={
                  !form.formState.isDirty ||
                  !form.formState.isValid ||
                  isUserLoading
                }
                className="w-full"
              >
                {isUserLoading ? "Updating..." : "Update Profile"}
              </Button>
            </form>
          </Form>
        </div>
      </section>
    </main>
  );
}

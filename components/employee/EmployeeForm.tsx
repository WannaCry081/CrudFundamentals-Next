"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { When } from "react-if";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { EmployeeSchema, type EmployeeSchemaType } from "@/schemas";
import { PositionType } from "@/types";
import { twJoin } from "tailwind-merge";
import { DeleteDialog } from "../shared";

interface EmployeeFormProps {
  isPending: boolean;
  initialData?: EmployeeSchemaType;
  onSubmit: (values: EmployeeSchemaType) => void;
  onDelete?: () => void;
}

const EmployeeForm = ({
  isPending,
  initialData,
  onSubmit,
  onDelete,
}: EmployeeFormProps) => {
  const form = useForm<EmployeeSchemaType>({
    resolver: zodResolver(EmployeeSchema),
    defaultValues: initialData! || {
      userName: "",
      firstName: "",
      lastName: "",
      email: "",
      position: "",
      phoneNumber: "",
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="relative space-y-2"
      >
        <FormField
          control={form.control}
          name="userName"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="userName">Username</FormLabel>
              <FormControl>
                <Input
                  id="userName"
                  className="bg-background"
                  placeholder="Username"
                  {...field}
                  disabled={isPending}
                  autoComplete="username"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex space-x-4 items-center">
          <span className="min-w-1/2 w-full max-w-1/2">
            <FormField
              control={form.control}
              name="firstName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="firstName">First Name</FormLabel>
                  <FormControl>
                    <Input
                      id="firstName"
                      className="bg-background"
                      placeholder="First Name"
                      {...field}
                      disabled={isPending}
                      autoComplete="given-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </span>

          <span className="min-w-1/2 w-full max-w-1/2">
            <FormField
              control={form.control}
              name="lastName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="lastName">Last Name</FormLabel>
                  <FormControl>
                    <Input
                      id="lastName"
                      className="bg-background"
                      placeholder="Last Name"
                      {...field}
                      disabled={isPending}
                      autoComplete="family-name"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </span>
        </div>

        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel htmlFor="email">Email Address</FormLabel>
              <FormControl>
                <Input
                  id="email"
                  className="bg-background"
                  placeholder="Email Address"
                  {...field}
                  disabled={isPending}
                  autoComplete="email"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex space-x-4 items-center">
          <span className="min-w-1/2 w-full max-w-1/2">
            <FormField
              control={form.control}
              name="phoneNumber"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
                  <FormControl>
                    <Input
                      id="phoneNumber"
                      className="bg-background"
                      placeholder="+63976 123 1234"
                      {...field}
                      disabled={isPending}
                      autoComplete="tel"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </span>
          <span className="min-w-1/2 w-full max-w-1/2">
            <FormField
              control={form.control}
              name="position"
              render={({ field }) => (
                <FormItem>
                  <FormLabel htmlFor="position">Position</FormLabel>
                  <Select
                    name="position"
                    disabled={isPending}
                    onValueChange={field.onChange}
                    value={field.value}
                  >
                    <SelectTrigger
                      className="bg-background"
                      id="position"
                      aria-label="Position"
                    >
                      <SelectValue {...field} placeholder="Select Position" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value={PositionType.MANAGER.toString()}>
                        Project Manager
                      </SelectItem>
                      <SelectItem value={PositionType.DEVELOPER.toString()}>
                        Developer
                      </SelectItem>
                      <SelectItem value={PositionType.TESTER.toString()}>
                        QA Tester
                      </SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
          </span>
        </div>

        <div className={twJoin("pt-4", !!initialData && "flex gap-2")}>
          <Button
            aria-label="Submit"
            type="submit"
            disabled={isPending}
            className="w-full rounded-md  bg-indigo-600 hover:bg-indigo-600/90"
          >
            {initialData ? "Update" : "Submit"}
          </Button>
        </div>
      </form>

      <When condition={!!initialData}>
        <DeleteDialog onDelete={onDelete!}>
          <Button variant="destructive" className="mt-2 w-full ">
            Delete
          </Button>
        </DeleteDialog>
      </When>
    </Form>
  );
};

export default EmployeeForm;

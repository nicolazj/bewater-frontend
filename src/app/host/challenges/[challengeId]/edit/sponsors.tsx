"use client";
import { Input } from "@/components/form/input";
import { UploaderInput } from "@/components/form/uploader";
import { useMutationUpdateChallenge } from "@/services/challenge.query";
import { Challenge } from "@/services/types";
import { validationSchema } from "@/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import * as Dialog from "@radix-ui/react-dialog";
import { ArrowDownIcon, ArrowUpIcon, Cross2Icon } from "@radix-ui/react-icons";
import { useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z
  .object({
    sponsors: z.array(
      z.object({
        defname: validationSchema.text,
        members: z.array(z.object({
            uri: validationSchema.text,
            href: z.string().optional(),
          }).or(validationSchema.text)),
      })
    ),
  })
  .required();

export type Inputs = z.infer<typeof schema>;

export function EditSponsors({ challenge }: { challenge: Challenge }) {
  let [open, openSet] = useState(false);
  let mutation = useMutationUpdateChallenge(challenge.id);
  let {
    control,
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>({
    resolver: zodResolver(schema),
    defaultValues: {
      sponsors: challenge.sponsors ?? [],
    },
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "sponsors", // unique name for your Field Array
    }
  );
  const onSubmit = async (formData: Inputs) => {
    try {
      await mutation.mutateAsync({
        id: challenge.id,
        ...formData,
      });
      openSet(false);
    } catch (err) {}
  };
  return (
    <Dialog.Root open={open} onOpenChange={(open) => openSet(open)}>
      <Dialog.Trigger asChild>
        <button className="btn btn-secondary-invert ">Edit </button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-black/60 z-20 fixed inset-0" />
        <Dialog.Content className="z-30 bg-[#141527]  fixed top-0 right-0 h-full  w-full md:w-[500px] p-8 overflow-y-auto">
          <Dialog.Title className="text-xl leading-8 text-white py-4 mb-4 border-b  border-b-white/20">
          Partners Information
          </Dialog.Title>
          <form method="post" onSubmit={handleSubmit(onSubmit)} className="">
            {fields.map((field, index) => {
              return (
                <div
                  className="relative mb-4 border-b border-grey-800"
                  key={field.id}
                >
                  <Input
                    label="Sponsor Name"
                    {...register(`sponsors.${index}.defname`)}
                    error={errors.sponsors?.[index]?.defname}
                  />
                  <UploaderInput
                    control={control}
                    label={"Sponsors Logo"}
                    name={`sponsors.${index}.members`}
                    title="Upload Avatar"
                    subTitlte="JPG/PNG"
                    max={100}
                    width={200}
                    height={70}
                    onValueChange={(v) => {
                      setValue(`sponsors.${index}.members`, v as string[]);
                    }}
                  />
                  <div className="absolute right-0 top-0 flex ">
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        move(index, Math.max(index - 1, 0));
                      }}
                    >
                      <ArrowUpIcon className="mr-1 text-grey-500" />
                    </button>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.stopPropagation();
                        move(index, Math.min(index + 1, fields.length - 1));
                      }}
                    >
                      <ArrowDownIcon className="mr-1 text-grey-500" />
                    </button>
                    <button
                      className="text-grey-300 flex items-center text-[12px]"
                      onClick={() => {
                        remove(index);
                      }}
                    >
                      <Cross2Icon className="mr-1 text-grey-500" />
                      Remove
                    </button>
                  </div>
                </div>
              );
            })}
            <button
              type="button"
              className="text-[12px] text-grey-300"
              onClick={() => {
                append({ defname: "", members: [] });
              }}
            >
              + Add a new sponsor category
            </button>
            <div className="flex mt-6 justify-end">
              <button className="btn btn-primary" type="submit">
                Save{" "}
              </button>
            </div>
          </form>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

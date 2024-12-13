'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'

import * as z from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import { 
  Form, 
  FormControl, 
  FormField, 
  FormItem, 
  FormLabel, 
  FormMessage 
} from "~/components/ui/form"

const formSchema = z.object({
  firstName: z.string().min(1, {
    message: "First name cannot be blank",
  }),
  lastName: z.string().min(1, {
    message: "Last name cannot be blank",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
})

export function SubscribeForm() {
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitResult, setSubmitResult] = useState<string | null>(null)
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
    },
  })

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    setSubmitResult(null)
    try {
      await fetch('/api/email', {
        method: 'POST',
        body: JSON.stringify({ 
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName
        }),
      })
      await fetch('/api/audience', {
        method: 'POST',
        body: JSON.stringify({ 
          email: values.email,
          firstName: values.firstName,
          lastName: values.lastName
        }),
      })
      setSubmitResult('Thank you for joining La Familia!')
      form.reset() // Reset the form after successful submission
    }
    catch (error: unknown) {
      console.error(error)
      setSubmitResult('An error occurred. Please try again.')
    }
    finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="sm:space-y-0 space-y-8 sm:space-x-4 flex mx-8 sm:mx-0 flex-col sm:flex-row align-items-center justify-center">
        <FormField
          control={form.control}
          name="firstName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>First Name</FormLabel>
              <FormControl>
                <Input placeholder="El" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="lastName"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Chapo" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="hola@banditos.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
          <div className="h-8"></div>
          <Button size="lg" type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Joining...' : 'Join La Familia'}
          </Button>
        </div>
      </form>
      {submitResult && (
        <div className={`mt-4 text-center ${submitResult.includes('error') ? 'text-red-600' : 'text-green-600'}`}>
          {submitResult}
        </div>
      )}
      <p className="text-center text-xs text-[#A29562] mt-4">
        The one thing we won&apos;t steal, sell, or exploit is your information. 
      </p>
    </Form>
  )
}


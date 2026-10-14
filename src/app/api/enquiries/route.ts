


import { NextResponse } from "next/server";
import { z } from "zod";
import { supabase } from "../../../lib/supabase";

const enquirySchema = z.object({
  name: z.string().trim().min(2).max(100),
  phone: z.string().trim().min(7).max(25),
  website: z.string().trim().min(3).max(255),
});

export async function POST(request: Request) {
  try {
    const body: unknown = await request.json();
    const parsed = enquirySchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        {
          error:
            "Please enter your name, phone number and website.",
        },
        { status: 400 }
      );
    }

    const { name, phone, website } = parsed.data;

    const { data, error } = await supabase
      .from("enquiries")
      .insert({
        name,
        phone,
        website,
        email: "",
        company: "",
        service: "website-review",
        message: `Website review request: ${website}`,
      })
      .select("id")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);

      return NextResponse.json(
        { error: "Unable to save your details. Please try again." },
        { status: 500 }
      );
    }

    if (!data) {
      console.error("Insert completed without a returned record.");

      return NextResponse.json(
        { error: "We could not confirm your submission." },
        { status: 500 }
      );
    }

    return NextResponse.json(
      {
        message: "Your details have been submitted successfully.",
        id: data.id,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Enquiry API error:", error);

    return NextResponse.json(
      { error: "Something went wrong while submitting your details." },
      { status: 500 }
    );
  }
}

import { Button } from "@/components/ui/button";
import {
	Card,
	CardHeader,
	CardTitle,
	CardDescription,
	CardContent,
	CardFooter,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@radix-ui/react-label";
import { redirect } from "next/navigation";

async function handleSubmit(formData: FormData) {
	"use server";
	const pan = formData.get("pan");
	if (pan) {
		redirect(`/results?pan=${pan}`);
	}
}

export default function Home() {
	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<Card className="w-[350px]">
					<CardHeader>
						<CardTitle>MoCaFi</CardTitle>
						<CardDescription>
							Please enter your Permanent Account Number (PAN).
						</CardDescription>
					</CardHeader>
					<form action={handleSubmit}>
						<CardContent>
							<div className="grid w-full items-center gap-4">
								<div className="flex flex-col space-y-1.5">
									<Label htmlFor="pan">Permanent Account Number (PAN)</Label>
									<Input
										name="pan"
										id="pan"
										placeholder="XXXX-XXXX-XXXX-XXXX"
										required
										minLength={16}
										maxLength={16}
									/>
								</div>
							</div>
						</CardContent>
						<CardFooter className="flex justify-between">
							<Button type="submit" className="w-full">
								Get my balance
							</Button>
						</CardFooter>
					</form>
				</Card>
			</main>
		</div>
	);
}
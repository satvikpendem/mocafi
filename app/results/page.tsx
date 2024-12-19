import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import Link from "next/link";
import { getBalance } from "../../lib/actions";

type SearchParams = Promise<{ pan: string }>;

export default async function Results({
	searchParams,
}: { searchParams: SearchParams }) {
	const { pan } = await searchParams;
	const balance = await getBalance(pan);

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<Card className="w-[350px]">
					<CardHeader>
						<CardTitle>MoCaFi</CardTitle>
						<CardDescription>Account balance details</CardDescription>
					</CardHeader>
					<CardContent>
						<div className="grid w-full items-center gap-4">
							<div className="flex flex-col space-y-1.5">
								{balance ? (
									<div>Your balance is ${balance}</div>
								) : (
									<div>
										Balance not found, please try again with a different PAN.
									</div>
								)}
							</div>
						</div>
					</CardContent>
					<CardFooter className="flex justify-between">
						<Link href="/">
							<Button className="w-full">Return to login</Button>
						</Link>
					</CardFooter>
				</Card>
			</main>
		</div>
	);
}

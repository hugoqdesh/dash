import { Banner } from "@/components/banner";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ChartPie } from "lucide-react";

export default function Home() {
	return (
		<main>
			<Banner />
			<Header />

			<div className="flex flex-col gap-4 items-center justify-center mx-auto mt-48 md:mt-72">
				<ChartPie size={40} className="text-primary/70" />

				<h1 className="text-2xl font-semibold">Welcome to the dashboard!</h1>

				<Button variant={"secondary"} className="group">
					Continue
					<ArrowRightIcon
						className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
						size={16}
						aria-hidden="true"
					/>
				</Button>
			</div>
		</main>
	);
}

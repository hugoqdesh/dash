import { Banner } from "@/components/banner";
import Orb from "@/components/Orb";
import Header from "@/components/header";
import { Button } from "@/components/ui/button";
import { ArrowRightIcon, ChartPie } from "lucide-react";

export default function Home() {
	return (
		<main>
			<Banner />
			<Header />

			<div className="flex flex-col gap-4 items-center justify-center mx-auto mt-0 md:mt-12">
				<div style={{ width: "100%", height: "600px", position: "relative" }}>
					<Orb
						hoverIntensity={0.2}
						rotateOnHover={true}
						hue={220}
						forceHoverState={false}
					/>
					<div className="absolute inset-0 flex flex-col items-center justify-center z-10 pointer-events-none">
						<ChartPie size={40} className="text-primary/70" />

						<h1 className="text-lg md:text-2xl font-semibold mt-4">
							Welcome to the dashboard!
						</h1>

						<Button
							variant={"secondary"}
							className="group mt-4 pointer-events-auto"
						>
							Continue
							<ArrowRightIcon
								className="-me-1 opacity-60 transition-transform group-hover:translate-x-0.5"
								size={16}
								aria-hidden="true"
							/>
						</Button>
					</div>
				</div>
			</div>
		</main>
	);
}

import { Construction } from "lucide-react";

export function Banner() {
	return (
		<div className="border-b text-foreground px-4 py-3">
			<p className="text-center text-sm">
				<Construction
					className="mr-3 -mt-0.5 inline-flex opacity-60 text-red-500"
					size={16}
					aria-hidden="true"
				/>
				This is still being built and updated by me
				<Construction
					className="ml-3 -mt-0.5 inline-flex opacity-60 text-red-500"
					size={16}
					aria-hidden="true"
				/>
			</p>
		</div>
	);
}

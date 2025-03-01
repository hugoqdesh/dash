import React from "react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";

const Header = () => {
	return (
		<div className="flex items-center justify-between pt-4 px-6">
			<ModeToggle />
			<Button variant={"ghost"}>Sign in</Button>
		</div>
	);
};

export default Header;

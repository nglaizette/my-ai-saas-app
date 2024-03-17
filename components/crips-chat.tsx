"use client"

import { useEffect } from "react";
import { Crisp } from "crisp-sdk-web";

export const CrispChat = () => {
	useEffect(() => {
		Crisp.configure("af6c471c-b31b-4f8a-b518-01646eb726bc");
	}, [])

	return null;
}
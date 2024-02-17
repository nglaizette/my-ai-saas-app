import { MyHeading } from "@/components/heading";
import { MessagesSquare } from "lucide-react";

const ConversationPage = () => {
	return(
	<div>
		<MyHeading 
		title="Conversation"
		description="Our most advanced conversation model."
		icon={MessagesSquare}
		iconColor="text-violet-500"
		bgColor="bg-violet-500/10"
		/>
	</div>
	);
}

export default ConversationPage;
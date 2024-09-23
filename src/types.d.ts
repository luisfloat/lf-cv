export interface ProjectItem {
	title: string;
	role: string;
	link: string;
	dateRange: string;
	skills: string[];
	text: string;
	items?: string[]
}

export interface CourseItem {
	org: string;
	title: string;
	startTime: string;
	endTime: string
}

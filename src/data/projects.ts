// Project data configuration file
// Used to manage data for the project display page

export interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	category: "web" | "mobile" | "desktop" | "other";
	techStack: string[];
	status: "completed" | "in-progress" | "planned";
	liveDemo?: string;
	sourceCode?: string;
	startDate: string;
	endDate?: string;
	featured?: boolean;
	tags?: string[];
	visitUrl?: string; // 添加前往项目链接字段
}

export const projectsData: Project[] = [
	{
		id: "cc-transfer",
		title: "CC转学计划",
		description:
			"从21年入学开始，期间经历过不少变动，gap等情况，依旧想要转学的心。",
		image: "",
		category: "other",
		techStack: ["CC", "Study", "Transfer", "Work"],
		status: "in-progress",
		liveDemo: "/null",
		sourceCode: "/null", // 更改为GitHub链接
		visitUrl: "/null", // 添加前往项目链接
		startDate: "21年开始",
		endDate: "希望26年能成功",
		featured: true,
		tags: ["Future", "Hope", "Dream"],
	}
];

// Get project statistics
export const getProjectStats = () => {
	const total = projectsData.length;
	const completed = projectsData.filter(
		(p) => p.status === "completed",
	).length;
	const inProgress = projectsData.filter(
		(p) => p.status === "in-progress",
	).length;
	const planned = projectsData.filter((p) => p.status === "planned").length;

	return {
		total,
		byStatus: {
			completed,
			inProgress,
			planned,
		},
	};
};

// Get projects by category
export const getProjectsByCategory = (category?: string) => {
	if (!category || category === "all") {
		return projectsData;
	}
	return projectsData.filter((p) => p.category === category);
};

// Get featured projects
export const getFeaturedProjects = () => {
	return projectsData.filter((p) => p.featured);
};

// Get all tech stacks
export const getAllTechStack = () => {
	const techSet = new Set<string>();
	projectsData.forEach((project) => {
		project.techStack.forEach((tech) => {
			techSet.add(tech);
		});
	});
	return Array.from(techSet).sort();
};

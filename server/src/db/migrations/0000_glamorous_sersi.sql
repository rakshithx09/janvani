CREATE TABLE `Comment` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`user_id` integer NOT NULL,
	`postId` integer NOT NULL,
	`content` text,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `department` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`scope` integer NOT NULL,
	`password` text
);
--> statement-breakpoint
CREATE TABLE `dept_pin` (
	`departmentId` integer NOT NULL,
	`pincode` text NOT NULL,
	PRIMARY KEY(`departmentId`, `pincode`),
	FOREIGN KEY (`departmentId`) REFERENCES `department`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `post` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`description` text NOT NULL,
	`latitude` text,
	`longitude` text,
	`image` text,
	`complaintType` text NOT NULL,
	`departmentId` integer NOT NULL,
	`author_id` integer NOT NULL,
	`scope` integer DEFAULT 1,
	`status` integer,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`departmentId`) REFERENCES `department`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`aadhaarNo` text NOT NULL,
	`dob` text NOT NULL,
	`gender` text NOT NULL,
	`name` text NOT NULL,
	`phone` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`building` text,
	`landmark` text,
	`street` text,
	`locality` text,
	`vtc` text,
	`subdist` text,
	`district` text,
	`state` text,
	`pincode` text NOT NULL,
	`joined_on` integer DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE `vote` (
	`user_id` integer NOT NULL,
	`postId` integer NOT NULL,
	`choice` integer DEFAULT true,
	PRIMARY KEY(`postId`, `user_id`),
	FOREIGN KEY (`user_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action,
	FOREIGN KEY (`postId`) REFERENCES `post`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE UNIQUE INDEX `user_aadhaarNo_unique` ON `user` (`aadhaarNo`);--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);
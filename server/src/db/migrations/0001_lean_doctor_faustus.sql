CREATE TABLE `post` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`title` text NOT NULL,
	`desciption` text NOT NULL,
	`image` text,
	`complaintType` text NOT NULL,
	`department` text NOT NULL,
	`author_id` integer NOT NULL,
	`created_at` integer DEFAULT CURRENT_TIMESTAMP NOT NULL,
	FOREIGN KEY (`author_id`) REFERENCES `user`(`id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `user` (
	`id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`email` text NOT NULL,
	`password` text NOT NULL,
	`joined_on` integer DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
ALTER TABLE `todos` RENAME TO `Comment`;--> statement-breakpoint
DROP INDEX IF EXISTS `nameIdx`;--> statement-breakpoint
/*
 SQLite does not support "Set autoincrement to a column" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html
                  https://stackoverflow.com/questions/2083543/modify-a-columns-type-in-sqlite3

 Due to that we don't generate migration automatically and it has to be done manually
*/--> statement-breakpoint
ALTER TABLE Comment ADD `user_id` integer NOT NULL REFERENCES user(id);--> statement-breakpoint
ALTER TABLE Comment ADD `postId` integer NOT NULL REFERENCES post(id);--> statement-breakpoint
ALTER TABLE Comment ADD `content` text;--> statement-breakpoint
CREATE UNIQUE INDEX `user_email_unique` ON `user` (`email`);--> statement-breakpoint
/*
 SQLite does not support "Creating foreign key on existing column" out of the box, we do not generate automatic migration for that, so it has to be done manually
 Please refer to: https://www.techonthenet.com/sqlite/tables/alter_table.php
                  https://www.sqlite.org/lang_altertable.html

 Due to that we don't generate migration automatically and it has to be done manually
*/--> statement-breakpoint
ALTER TABLE `Comment` DROP COLUMN `title`;--> statement-breakpoint
ALTER TABLE `Comment` DROP COLUMN `description`;--> statement-breakpoint
ALTER TABLE `Comment` DROP COLUMN `due_date`;--> statement-breakpoint
ALTER TABLE `Comment` DROP COLUMN `priority`;--> statement-breakpoint
ALTER TABLE `Comment` DROP COLUMN `status`;--> statement-breakpoint
ALTER TABLE `Comment` DROP COLUMN `updated_at`;--> statement-breakpoint
ALTER TABLE `Comment` DROP COLUMN `completed_at`;
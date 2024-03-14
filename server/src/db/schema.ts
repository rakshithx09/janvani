import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text, uniqueIndex, primaryKey } from 'drizzle-orm/sqlite-core'

export const userTable = sqliteTable('user', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    joinedOn: integer('joined_on')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull()
});

export const postTable = sqliteTable('post', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    title: text("title").notNull(),
    description: text("description").notNull(),
    image: text("image"),
    complaintType: text('complaintType', { enum: ['association', 'group', 'individual', 'individual'] }).notNull(),
    department: text('department', { enum: ['engineering', 'public health', 'revenue', 'town planning'] }).notNull(),
    userId: integer("author_id").references(() => userTable.id).notNull(),
    createdAt: integer('created_at')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull()
});

// export const tagsTable = sqliteTable('Tag', {
//     id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
//     tag: text("tag").notNull().unique(),
//     recipeId: integer("recipe_id").references(() => recipeTable.id).notNull(),
// });

export const commemtsTable = sqliteTable('Comment', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    userId: integer("user_id").references(() => userTable.id).notNull(),
    postId: integer("postId").references(() => postTable.id).notNull(),
    content: text("content"),
    createdAt: integer('created_at')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull()
});
import { sql } from 'drizzle-orm'
import { integer, sqliteTable, text, uniqueIndex, primaryKey } from 'drizzle-orm/sqlite-core'

export const userTable = sqliteTable('user', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    name: text("name").notNull(),
    email: text("email").notNull().unique(),
    password: text("password").notNull(),
    pinCode:text("pincode").notNull(),
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
    departmentId: integer("departmentId").references(() => departmentTable.id).notNull(),
    userId: integer("author_id").references(() => userTable.id).notNull(),
    scope:integer("scope").default(1),
    createdAt: integer('created_at')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull()
});

export const commemtsTable = sqliteTable('Comment', {
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    userId: integer("user_id").references(() => userTable.id).notNull(),
    postId: integer("postId").references(() => postTable.id).notNull(),
    content: text("content"),
    createdAt: integer('created_at')
        .default(sql`CURRENT_TIMESTAMP`)
        .notNull()
});

export const departmentTable = sqliteTable('department',{
    id: integer('id', { mode: 'number' }).primaryKey({ autoIncrement: true }),
    name:text("name").notNull(),
    scope:integer("scope").notNull()
})

export const department_pincode = sqliteTable('dept_pin',{
    departmentId: integer("departmentId").references(() => departmentTable.id).notNull(),
    pincode: text("pincode").notNull()   
}, (table) => {
    return {
      pk: primaryKey({ columns: [table.departmentId, table.pincode] }),
    }
})

export const voteTable = sqliteTable('vote',{
    userId: integer("user_id").references(() => userTable.id).notNull(),
    postId: integer("postId").references(() => postTable.id).notNull(),    
}, (table) => {
    return {
      pk: primaryKey({ columns: [table.userId, table.postId] }),
    }
})
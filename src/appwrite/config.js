import conf from "../conf/conf";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
    client = new Client();
    databases;
    buckets;

    constructor() {
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    async createPost({ slug, title, content, featuredImage, status, userId }) {
        try {
            return (
                await this.databases.createDocument(
                    conf.appwriteDatabaseId,
                    conf.appwriteCollectionId
                ),
                slug,
                { title, content, featuredImage, status, userId }
            );
        } catch (err) {}
    }
    async updatePost(slug, { title, content, featuredImage, status }) {
        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            );
        } catch (err) {
            console.log(err);
        }
    }
    async deletePost(slug) {
        try {
            return await this.databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
            return true;
        } catch (err) {
            console.log(err);
        }
        return false;
    }
    async getPost(slug) {
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            );
        } catch (err) {
            console.log(err);
        }
        return false;
    }
    async getPosts(queries = [Query.equal("status", "active")]) {
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries
            );
        } catch (err) {
            console.log(err);
        }
        return false;
    }
    async uploadFile(file) {
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            );
        } catch (err) {
            console.log(err);
        }
        return false;
    }
    async deleteFile(fileId) {
        try {
            await this.bucket.deleteFile(conf.appwriteBucketId, fileId);
            return true;
        } catch (err) {
            console.log(err);
            return false;
        }
    }
    getfilePreview(fileId) {
        return this.bucket.getfilePreview(conf.appwriteBucketId, fileId);
    }
}

const service = new Service();
export default Service;

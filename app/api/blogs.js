import axios from 'axios';
import { devURL } from '../config/server';
import httpClient from '../config/httpClient';

//========================================================================

export const getBlogs = async () => {
  return httpClient.get(`/api/v1/super-admin/blogs`);
};

export const getBlogById = async (blogId) => {
  return httpClient.get(`/api/v1/super-admin/blogs/${blogId}`);
};


//========================================================================================================

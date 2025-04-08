import axios from 'axios';
import { devURL } from '../config/server';
import httpClient from '../config/httpClient';

//========================================================================

export const getJobsPostings = async () => {
  return httpClient.get(`/api/v1/super-admin/job`);
};



//========================================================================================================

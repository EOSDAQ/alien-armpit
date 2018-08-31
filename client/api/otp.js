import axios from 'axios';
import errorHandler from './errorHandler';
import { proxy } from './apis';

export const initOtp = async ({ accountName }) => 
  proxy.post(`/account/${accountName}/otp/init`);

export const validateOtp = async ({ accountName, code }) =>
  proxy.post(`/account/${accountName}/otp/validate`, { code });

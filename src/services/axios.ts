import axios from 'axios';

export async function AxiosRequest(url: string, formData?: FormData): Promise<AxiosRequestProps> {
  try {
    const response = await axios.post('/api' + url, formData, {
      headers: {
        'Content-Type': formData ? 'multipart/form-data' : 'application/json'
      }
    });

    return {
      success: true,
      data: response.data
    };
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return {
        success: false,
        data: error?.response?.data || 'Axios Server Error'
      };
    } else {
      return {
        success: false,
        data: 'Axios Server Error'
      };
    }
  }
}

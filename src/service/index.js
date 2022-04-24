import * as BackendService from "./BackendService";
//get endpoint
export const getAchievements = () => BackendService.get("public/achievement");
export const getEvents = () => BackendService.get("public/event");
export const getGallery = () => BackendService.get("public/gallery");
//add endpoint
export const addAchievement = (data) =>
  BackendService.post("user/achievement", data);
export const addEvent = (data) => BackendService.post("user/event", data);
export const addGallery = (data) => BackendService.post("user/gallery", data);

//upload endpoints
export const uploadAchievement = (id, file) => {
  const formData = new FormData();
  formData.append("file", file);
  return BackendService.patch(`user/achievement/${id}/upload`, formData);
};
export const uploadEvent = (id, file) => {
  const formData = new FormData();
  formData.append("file", file);
  return BackendService.patch(`user/event/${id}/upload`, formData);
};
export const uploadEventDoc = (id, file) => {
  const formData = new FormData();
  formData.append("file", file);
  return BackendService.patch(`user/event/${id}/doc/upload`, formData);
};
export const uploadGallery = (id, file) => {
  const formData = new FormData();
  formData.append("file", file);
  return BackendService.patch(`user/gallery/${id}/upload`, formData);
};
//auth endpoint
export const login = (data) => BackendService.post("user/auth/login", data);

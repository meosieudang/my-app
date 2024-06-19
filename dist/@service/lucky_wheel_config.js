import axios from "axios";
const getLuckyWheelPlanConfigs = (id, campaignId) => {
  let params = {
    id,
    campaignId
  };
  return axios.get("api/luckywheelconfig/get_luckywheelplanconfigs", {
    params
  });
};
const getInfoLuckyWheel = () => {
  return axios.get("api/luckywheelconfig/get_infoluckywheel");
};
const createLuckyWheelPlanConfigs = data => {
  return axios.post("api/luckywheelconfig/create_luckywheelplanconfigs", data);
};
const updateLuckyWheelPlanConfigs = data => {
  return axios.post("api/luckywheelconfig/update_luckywheelplanconfigs", data);
};
const updateLuckyWheelGifts = data => {
  return axios.post("api/luckywheelconfig/update_luckywheelgifts", data);
};
const getLuckyWheel_noofwheel = orderCode => {
  let params = {
    orderCode
  };
  return axios.get("api/luckywheel/get_luckywheel_noofwheel", {
    params
  });
};
const LuckyWheelConfigServices = {
  getLuckyWheelPlanConfigs,
  getInfoLuckyWheel,
  createLuckyWheelPlanConfigs,
  updateLuckyWheelPlanConfigs,
  updateLuckyWheelGifts,
  getLuckyWheel_noofwheel
};
export default LuckyWheelConfigServices;
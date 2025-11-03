import { HIDE_SENSITIVE_INFO, PRIVACY_CONFIG } from "@/config/privacy";

/**
 * Get sensitive information based on privacy configuration
 * 
 * When HIDE_SENSITIVE_INFO is false, returns actual company information.
 * When HIDE_SENSITIVE_INFO is true, returns generic placeholder text.
 */
export const getSensitiveInfo = () => {
  if (HIDE_SENSITIVE_INFO) {
    return {
      companyFullName: PRIVACY_CONFIG.companyFullName,
      addressLine1: PRIVACY_CONFIG.addressLine1,
      addressLine2: PRIVACY_CONFIG.addressLine2,
      phone: PRIVACY_CONFIG.phone,
      email: PRIVACY_CONFIG.email,
      gstin: PRIVACY_CONFIG.gstin,
      mapUrl: PRIVACY_CONFIG.mapUrl
    };
  }

  // Return actual information
  return {
    companyFullName: "M/S Gouri Shankar Lubricants",
    addressLine1: "Plot No. 3936, Gurujang Village",
    addressLine2: "Talcher Sadar, Anugul, Odisha, India, 759100",
    phone: "+918908094205",
    email: "gslubricantsodisha@gmail.com",
    gstin: "21AAJFG6323M1ZE",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.8!2d85.2269!3d20.9506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU3JzAyLjIiTiA4NcKwMTMnMzYuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
  };
};

/**
 * Check if privacy mode is active
 */
export const isPrivacyModeActive = () => HIDE_SENSITIVE_INFO;

/**
 * Privacy Configuration
 * 
 * Control the visibility of sensitive company information across the entire website.
 * 
 * TO HIDE INFORMATION:
 * Set HIDE_SENSITIVE_INFO = true
 * 
 * TO RESTORE INFORMATION:
 * Set HIDE_SENSITIVE_INFO = false
 * 
 * After changing this value, save the file and redeploy your application.
 */

export const HIDE_SENSITIVE_INFO = false;

/**
 * Replacement text used when HIDE_SENSITIVE_INFO is true
 */
export const PRIVACY_CONFIG = {
  // Original company name: "M/S Gouri Shankar Lubricants"
  companyFullName: "GS Lubricants",
  
  // Original address: "Plot -861 Kedargori, Old Town Bhubaneswar, PIN-751002"
  addressLine1: "Bhubaneswar, Odisha, India",
  addressLine2: "",
  
  // Original phone: "+918908094205"
  phone: "Contact form available",
  
  // Original email: "gslubricantsodisha@gmail.com"
  email: "Use contact form",
  
  // Original GSTIN: "GBJH453487RH5465326"
  gstin: "",
  
  // Map URL replacement (optional)
  mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3742.8!2d85.2269!3d20.9506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDU3JzAyLjIiTiA4NcKwMTMnMzYuOCJF!5e0!3m2!1sen!2sin!4v1234567890"
};

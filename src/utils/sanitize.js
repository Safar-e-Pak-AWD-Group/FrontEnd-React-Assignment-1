// Sanitize input (remove extra spaces, dangerous chars)
export const sanitizeInput = (input) => {
  
   if (input === null || input === undefined) return "";

    // --- Handle primitive types (numbers, strings, booleans)
    // return them as they are, because they are save
    if (typeof input === "number") return input;
    if (typeof input === "boolean") return input;

    // --- Recursively sanitize arrays
    // again and again call this function for each element of array
    if (Array.isArray(input)) {
        return input.map((item) => sanitizeInput(item));
    }
     if (typeof input === "object") {
        const sanitizedObject = {};
        for (const key in input) {
            if (Object.prototype.hasOwnProperty.call(input, key)) {
                sanitizedObject[key] = sanitizeInput(input[key]);
            }
        }
        return sanitizedObject;
    }
   // --- Handle strings safely
    // detect string-characters and convert them to save-character if needed.
    if (typeof input === "string") {
        let sanitized = input.trim();

        // Remove risky patterns (script tags, event handlers, SQL-like input)
        const blacklistPatterns = [
            /<script.*?>.*?<\/script>/gi,
            /javascript:/gi,
            /on\w+=".*?"/gi,
            /--/g,
            /;/g,
        ];
        blacklistPatterns.forEach((pattern) => {
            sanitized = sanitized.replace(pattern, "");
        });

        // Escape special HTML entities
        sanitized = sanitized
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "'")
            .replace(/\\/g, "");

        return sanitized;
    }
  return string(input);
};

//  Validate full name
export const validateFullName = (name) => {
  if (!name) return "Full name is required.";
  if (!/^[A-Za-z\s]+$/.test(name))
    return "Name can only contain alphabets and spaces.";
  if (name.length < 3)
    return "Full name must be at least 3 characters long.";
  return "";
};

//  Validate email format
export const validateEmail = (email) => {
  if (!email) return "Email is required.";
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!regex.test(email)) return "Please enter a valid email address.";
  return "";
};

//  Validate password strength
export const validatePassword = (password) => {
  if (!password) return "Password is required.";
  if (password.length < 8)
    return "Password must be at least 8 characters long.";
  if (!/[A-Z]/.test(password))
    return "Password must contain at least one uppercase letter.";
  if (!/[a-z]/.test(password))
    return "Password must contain at least one lowercase letter.";
  if (!/[0-9]/.test(password))
    return "Password must contain at least one number.";
  if (!/[@$!%*?&]/.test(password))
    return "Password must contain at least one special character (@, $, !, %, *, ?, &).";
  return "";
};

//  Confirm password check
export const validateConfirmPassword = (password, confirmPassword) => {
  if (password !== confirmPassword) return "Passwords do not match.";
  return "";
};



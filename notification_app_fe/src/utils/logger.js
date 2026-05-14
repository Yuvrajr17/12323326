import axios from "axios";

const TOKEN = "YOUR_ACCESS_TOKEN";

export const Log = async (stack, level, pkg, message) => {
  try {
    await axios.post(
      "http://4.224.186.213/evaluation-service/logs",
      {
        stack,
        level,
        package: pkg,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${TOKEN}`,
        },
      }
    );
  } catch (error) {
    console.error("Logging failed");
  }
};
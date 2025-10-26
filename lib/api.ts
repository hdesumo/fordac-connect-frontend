import axios from "axios";

export const API_BASE_URL = "https://api.fordac-connect.org";

/**
 * 🟩 Authentification membre
 * @param email
 * @param password
 * @returns token ou message d’erreur
 */
export const loginMember = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error: any) {
    console.error("Erreur de connexion :", error.message);
    throw new Error("Impossible de se connecter au serveur.");
  }
};

/**
 * 🟦 Enregistrement d’un nouveau membre (adhésion)
 * @param data Données du formulaire d’adhésion
 */
export const registerMember = async (data: any) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/members`, data);
    return response.data;
  } catch (error: any) {
    console.error("Erreur d’enregistrement :", error.message);
    throw new Error("Erreur lors de l’adhésion du membre.");
  }
};

/**
 * 🟨 Récupération de la liste des membres (admin/dashboard)
 */
export const getMembers = async (token: string) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/members`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Erreur lors de la récupération des membres :", error.message);
    throw new Error("Impossible de charger les membres.");
  }
};

/**
 * 🟥 Récupération des événements (page Agenda)
 */
export const getEvents = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/api/events`);
    return response.data;
  } catch (error: any) {
    console.error("Erreur lors de la récupération des événements :", error.message);
    throw new Error("Impossible de charger les événements.");
  }
};

/**
 * 🟪 Création d’un nouvel événement (admin)
 */
export const createEvent = async (eventData: any, token: string) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/api/events`, eventData, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error: any) {
    console.error("Erreur lors de la création de l’événement :", error.message);
    throw new Error("Impossible d’ajouter l’événement.");
  }
};

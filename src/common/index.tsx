export const openWhatsApp = (number: number, text: string) => {
  const phoneNumber = number;
  const message = encodeURIComponent(text.replace(/\n/g, ' '));
  const url = `https://wa.me/${phoneNumber}?text=${message}`;

  // Usando '_blank' mas sem deixar a aba em branco
  const whatsappWindow = window.open(url, '_blank');

  if (whatsappWindow) {
    whatsappWindow.opener = null; // Impede que a aba de WhatsApp interaja com a aba original
  }
};

export const openWaze = () => {
  const lat = -21.55476257132511;
  const lon = -45.4414329698658;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    return `waze://?ll=${lat},${lon}&navigate=yes`;
  } else {
    return `https://waze.com/ul?ll=${lat},${lon}&navigate=yes`;
  }
};

export const openGoogleMaps = () => {
  const lat = -21.55476257132511;
  const lon = -45.4414329698658;

  const destination = `${lat},${lon}`;

  const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

  if (isMobile) {
    return `googlemaps://?daddr=${destination}`;
  } else {
    return `https://www.google.com/maps/dir/?api=1&destination=${destination}`;
  }
};

export const mailtoLink = (
  recipient: string,
  subject: string,
  body: string
) => {
  const formattedBody = body.replace(/\n/g, '\r\n');
  return `mailto:${recipient}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBody)}`;
};

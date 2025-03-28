import React from 'react';

import ExploreBox from '../ExploreBox/ExploreBox';
import { Details, IconBox, Info, Label } from './Map.styles';
import { IconMap } from '../../assets/icons/Icons';
import { mailtoLink, openWaze } from '../../common';

const Map: React.FC = () => {
  const email = 'draericasales@hotmail.com';
  const subject = 'Agendamento de consulta';
  const body = `Olá, Dra. Érica Sales, \r\nMeu nome é: \r\nGostaria de agendar uma avaliação. 
  \r\nPoderia me enviar sua disponibilidade de horarios, por favor? \r\n\r\nAtenciosamente`;

  return (
    <ExploreBox title="Como chegar">
      <iframe
        // eslint-disable-next-line max-len
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3710.797837828677!2d-45.44400092472883!3d-21.554758780229534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ca92863834977f%3A0x4ac439666f2f467f!2sR.%20Dr.%20Arnaldo%2C%20165%20-%20Vila%20Pinto%2C%20Varginha%20-%20MG%2C%2037002-035!5e0!3m2!1sen!2sbr!4v1742866635736!5m2!1sen!2sbr"
        width="600"
        title="Mapa"
        height="450"
        style={{ border: 0, width: '100%', height: 300 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <Details>
        <Info>
          <IconBox href={openWaze()} target="_blank">
            {IconMap.waze}
          </IconBox>
          <Label>Rua Doutor Arnaldo, 165 - Vila Pinto, Varginha - MG</Label>
        </Info>
        <Info>
          <IconBox href={mailtoLink(email, subject, body)}>
            {IconMap.email}
          </IconBox>
          <Label href={mailtoLink(email, subject, body)}>
            draericasales@hotmail.com
          </Label>
        </Info>
      </Details>
    </ExploreBox>
  );
};

export default Map;

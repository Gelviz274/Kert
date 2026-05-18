import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export const metadata = {
  title: 'Política de Privacidad | Kert S.A.S',
  description: 'Política de Privacidad de Kert S.A.S según la legislación colombiana. Conoce cómo protegemos tus datos personales.',
  keywords: 'política de privacidad, protección de datos, Kert S.A.S, ley 1581 de 2012, habeas data',
};

export default function PoliticaPrivacidad() {
  return (
    <main className="bg-white py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <Link 
          href="/" 
          className="inline-flex items-center text-azul hover:text-amarillo transition-colors mb-8"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Volver a inicio
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold text-azul mb-8 border-b border-amarillo pb-4">
          Política de Protección de Datos Personales
        </h1>

        <div className="prose prose-lg max-w-none text-gray-700">
          <p className="font-medium text-lg">
            Fecha de última actualización: {new Date().toLocaleDateString('es-CO', {year: 'numeric', month: 'long', day: 'numeric'})}
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">1. Introducción</h2>
            <p>
              KERT S.A.S., identificada con NIT 901398420-7, con domicilio en Carrera 29B bis N.1 A-70, Colombia (en adelante "KERT", "nosotros" o "la empresa"), 
              está comprometida con la protección de la información personal de sus clientes, proveedores y público en general, en cumplimiento 
              de la Ley Estatutaria 1581 de 2012, el Decreto Reglamentario 1377 de 2013, y demás normas concordantes, por las cuales se dictan disposiciones 
              para la protección de datos personales.
            </p>
            <p className="mt-2">
              Es importante señalar que actualmente nuestro sitio web no recolecta datos personales a través de formularios en línea. Sin embargo, esta política 
              se aplica a los datos que podamos obtener a través de otros canales de comunicación como correo electrónico, teléfono o comunicación directa 
              para propósitos comerciales o contractuales.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">2. Alcance</h2>
            <p>
              Esta Política de Protección de Datos Personales se aplica a toda la información personal que sea obtenida, recolectada, almacenada, 
              usada, circulada, suprimida, procesada, transmitida, transferida, actualizada o dispuesta por KERT S.A.S. a través de sus diferentes 
              canales de comunicación y atención al cliente.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">3. Definiciones</h2>
            <ul className="space-y-2">
              <li><strong>Autorización:</strong> Consentimiento previo, expreso e informado del Titular para llevar a cabo el tratamiento de datos personales.</li>
              <li><strong>Base de Datos:</strong> Conjunto organizado de datos personales que sea objeto de tratamiento.</li>
              <li><strong>Dato Personal:</strong> Cualquier información vinculada o que pueda asociarse a una o varias personas naturales determinadas o determinables.</li>
              <li><strong>Encargado del Tratamiento:</strong> Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, realice el tratamiento de datos personales por cuenta del Responsable del Tratamiento.</li>
              <li><strong>Responsable del Tratamiento:</strong> Persona natural o jurídica, pública o privada, que por sí misma o en asocio con otros, decida sobre la base de datos y/o el tratamiento de los datos.</li>
              <li><strong>Titular:</strong> Persona natural cuyos datos personales sean objeto de tratamiento.</li>
              <li><strong>Tratamiento:</strong> Cualquier operación o conjunto de operaciones sobre datos personales, tales como la recolección, almacenamiento, uso, circulación o supresión.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">4. Principios</h2>
            <p>KERT S.A.S. aplicará los siguientes principios en el tratamiento de datos personales:</p>
            <ul className="space-y-2">
              <li><strong>Principio de legalidad:</strong> El tratamiento de datos personales es una actividad reglada que debe sujetarse a lo establecido en la ley y en las demás disposiciones que la desarrollen.</li>
              <li><strong>Principio de finalidad:</strong> El tratamiento debe obedecer a una finalidad legítima de acuerdo con la Constitución y la Ley, la cual debe ser informada al Titular.</li>
              <li><strong>Principio de libertad:</strong> El tratamiento sólo puede ejercerse con el consentimiento, previo, expreso e informado del Titular.</li>
              <li><strong>Principio de veracidad o calidad:</strong> La información sujeta a tratamiento debe ser veraz, completa, exacta, actualizada, comprobable y comprensible.</li>
              <li><strong>Principio de transparencia:</strong> En el tratamiento debe garantizarse el derecho del Titular a obtener del Responsable o del Encargado, en cualquier momento y sin restricciones, información acerca de la existencia de datos que le conciernan.</li>
              <li><strong>Principio de acceso y circulación restringida:</strong> El tratamiento se sujeta a los límites que se derivan de la naturaleza de los datos personales.</li>
              <li><strong>Principio de seguridad:</strong> La información sujeta a tratamiento por el Responsable o Encargado, se deberá manejar con las medidas técnicas, humanas y administrativas necesarias para otorgar seguridad a los registros.</li>
              <li><strong>Principio de confidencialidad:</strong> Todas las personas que intervengan en el tratamiento de datos personales están obligadas a garantizar la reserva de la información.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">5. Derechos de los Titulares</h2>
            <p>De acuerdo con la Ley 1581 de 2012, los titulares de datos personales tienen los siguientes derechos:</p>
            <ul className="space-y-2">
              <li>Conocer, actualizar y rectificar sus datos personales.</li>
              <li>Solicitar prueba de la autorización otorgada al Responsable del Tratamiento.</li>
              <li>Ser informado, previa solicitud, respecto del uso que se ha dado a sus datos personales.</li>
              <li>Presentar quejas ante la Superintendencia de Industria y Comercio por infracciones a la ley.</li>
              <li>Revocar la autorización y/o solicitar la supresión del dato cuando no se respeten los principios, derechos y garantías constitucionales y legales.</li>
              <li>Acceder en forma gratuita a sus datos personales que hayan sido objeto de Tratamiento.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">6. Información que recopilamos</h2>
            <p>
              Actualmente, KERT S.A.S. no recolecta datos personales a través de formularios en su sitio web. La información personal que podríamos 
              manejar se limita a:
            </p>
            <ul className="space-y-2">
              <li>Datos de contacto proporcionados voluntariamente por clientes y proveedores a través de canales de comunicación directa como correo electrónico, teléfono o correspondencia física.</li>
              <li>Información necesaria para la ejecución de relaciones contractuales, comerciales o laborales.</li>
              <li>Datos requeridos para la emisión de facturas o cumplimiento de obligaciones legales.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">7. Finalidades del Tratamiento</h2>
            <p>Los datos personales que KERT S.A.S. llegue a obtener a través de sus canales de comunicación serán utilizados para:</p>
            <ul className="space-y-2">
              <li>Ejecutar la relación contractual existente con clientes, proveedores y trabajadores.</li>
              <li>Proveer los servicios y/o productos requeridos por sus clientes.</li>
              <li>Informar sobre nuevos productos o servicios y/o cambios en los mismos.</li>
              <li>Evaluar la calidad del servicio.</li>
              <li>Dar cumplimiento a obligaciones contraídas con clientes, proveedores y empleados.</li>
              <li>Enviar información comercial, cuando el titular haya autorizado expresamente recibir este tipo de comunicaciones.</li>
              <li>Soportar procesos de auditoría interna o externa.</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">8. Procedimiento para el Ejercicio de los Derechos de los Titulares</h2>
            <p>
              Los titulares de datos personales pueden ejercer sus derechos de conocer, actualizar, rectificar y suprimir sus datos personales 
              enviando su solicitud al correo electrónico: <a href="mailto:contacto@creacionkert.com" className="text-amarillo hover:underline">contacto@creacionkert.com</a> o a la dirección [insertar dirección completa], de conformidad con esta Política de Privacidad.
            </p>
            <p className="mt-2">
              El procedimiento que seguirá la empresa para dar trámite a las solicitudes hechas por los titulares para el ejercicio de sus derechos es el siguiente:
            </p>
            <ol className="list-decimal list-inside space-y-2 mt-2">
              <li>El titular o su representante deberá presentar solicitud escrita al correo electrónico o la dirección mencionada.</li>
              <li>La solicitud debe contener como mínimo: identificación completa del titular, descripción de los hechos que originan la solicitud, dirección de contacto y documentos que se desean hacer valer.</li>
              <li>Si la solicitud no cumple con los requisitos, se requerirá al interesado dentro de los cinco (5) días siguientes a la recepción de la solicitud para que subsane las fallas.</li>
              <li>El término máximo para atender la solicitud será de quince (15) días hábiles contados a partir del día siguiente a la fecha de su recibo.</li>
            </ol>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">9. Medidas de Seguridad</h2>
            <p>
              KERT S.A.S. ha adoptado las medidas técnicas, humanas y administrativas necesarias para garantizar la seguridad de los datos personales 
              objeto de tratamiento, evitando su adulteración, pérdida, consulta, uso o acceso no autorizado o fraudulento.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">10. Cookies y tecnologías similares</h2>
            <p>
              Nuestro sitio web puede utilizar cookies u otras tecnologías similares para mejorar la experiencia del usuario. 
              Estas herramientas no recopilan información personal y pueden ser desactivadas en la configuración de su navegador.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-azul mt-8 mb-4">11. Vigencia de la Política</h2>
            <p>
              La presente Política de Protección de Datos Personales rige a partir de su publicación.
              KERT S.A.S. se reserva el derecho de modificar esta política en cualquier momento, notificándolo a través de su página web 
              antes de su implementación.
            </p>
          </section>

          <p className="mt-12 text-sm text-gray-500 border-t border-gray-200 pt-4">
            Cualquier inquietud adicional puede ser consultada a través de nuestros canales de comunicación.
          </p>
        </div>
      </div>
    </main>
  );
} 
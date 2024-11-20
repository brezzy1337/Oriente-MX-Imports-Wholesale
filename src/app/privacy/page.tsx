export default function Privacy() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Aviso de Privacidad</h1>
      
      <div className="space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-4">1. Información General</h2>
          <p className="text-gray-700">
            DeliAsya, con domicilio en [Dirección], es responsable del tratamiento de sus datos personales.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">2. Datos Personales que Recopilamos</h2>
          <p className="text-gray-700">
            Para llevar a cabo las finalidades descritas en el presente aviso de privacidad, utilizaremos los siguientes datos personales:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Nombre completo</li>
            <li>Dirección de correo electrónico</li>
            <li>Número telefónico</li>
            <li>Dirección postal</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">3. Finalidades del Tratamiento de Datos</h2>
          <p className="text-gray-700">
            Sus datos personales serán utilizados para las siguientes finalidades:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Procesar pedidos y entregas</li>
            <li>Enviar información sobre productos y servicios</li>
            <li>Responder a sus consultas y solicitudes</li>
            <li>Mejorar nuestros servicios</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">4. Derechos ARCO</h2>
          <p className="text-gray-700">
            Usted tiene derecho a conocer qué datos personales tenemos de usted, para qué los utilizamos y las condiciones del uso que les damos (Acceso). 
            Asimismo, es su derecho solicitar la corrección de su información personal en caso de que esté desactualizada, sea inexacta o incompleta (Rectificación); 
            que la eliminemos de nuestros registros o bases de datos cuando considere que la misma no está siendo utilizada conforme a los principios, deberes y obligaciones 
            previstas en la normativa (Cancelación); así como oponerse al uso de sus datos personales para fines específicos (Oposición).
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">5. Contacto</h2>
          <p className="text-gray-700">
            Para ejercer sus derechos ARCO, o para obtener más información sobre el tratamiento de sus datos personales, puede contactarnos en:
          </p>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Correo electrónico: privacy@deliasya.com</li>
            <li>Teléfono: [Número de teléfono]</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-4">6. Actualizaciones</h2>
          <p className="text-gray-700">
            El presente aviso de privacidad puede sufrir modificaciones, cambios o actualizaciones derivadas de nuevos requerimientos legales, 
            de nuestras propias necesidades, o por otras causas. Nos comprometemos a mantenerlo informado sobre los cambios que pueda sufrir 
            el presente aviso de privacidad.
          </p>
          <p className="text-gray-700 mt-2">
            Última actualización: [Fecha]
          </p>
        </section>
      </div>
    </div>
  );
}

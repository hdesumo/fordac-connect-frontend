export default function OrganesAssociesIndex() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">
        Organes Associés du FORDAC
      </h1>

      <p className="text-lg text-gray-700 leading-relaxed mb-8">
        Les organes associés regroupent les structures partenaires qui soutiennent
        l’action du FORDAC. Sélectionnez une rubrique ci-dessous.
      </p>

      <ul className="space-y-4 text-green-700 font-medium">
        <li>
          <a href="/organes-associes/presse" className="hover:underline">
            Presse de la Nation
          </a>
        </li>
        <li>
          <a href="/organes-associes/mutuelle" className="hover:underline">
            Mutuelle du FORDAC
          </a>
        </li>
      </ul>
    </div>
  );
}

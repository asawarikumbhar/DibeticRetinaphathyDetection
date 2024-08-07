import React from 'react'



export default function Treatement() {
  return (
    <div className="container mx-auto px-4 py-8">
    <h1 className="text-3xl font-bold mb-4">Treatments</h1>
    <p className="text-gray-700 text-base mb-8">
    The Diabetic Retinopathy Treatment depends on the severity and stage of the disease. Early detection and treatment can help prevent vision loss or slow down its progresion. Here are some of the treatment options for diabetic retinopathy: </p>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"></div>

      <div className="bg-gray rounded-lg shadow-md px-4 py-6">
        <h2 className="text-xl font-bold mb-2">Control of Blood Sugar Levels</h2>
        <p className="text-gray-700 text-base">
          Keeping blood sugar levels under control is an important part of managing diabetic retinopathy. This can be achieved through a combination of lifestyle changes, such as exercise and a healthy diet, and medication, such as insulin or oral hypoglycemic agents.
        </p>
      </div> <br />
     
      <div className="bg-white rounded-lg shadow-md px-4 py-6">
        <h2 className="text-xl font-bold mb-2">Laser Therapy</h2>
        <p className="text-gray-700 text-base">
        Laser therapy,also known as photocoagulation,is a common treatment for diabetic retionopathy.During this procedure,a laser beam is used to seal leaking blood vassels and prevent the growth of new ones.This can help prevent further damage to the retina and slow down the progression of the disease.</p>
      </div>
      <br />
      <div className="bg-white rounded-lg shadow-md px-4 py-6">
        <h2 className="text-xl font-bold mb-2">Intravitreal injections</h2>
        <p className="text-gray-700 text-base">
        These are injections of medication directly into the eye.Anti-VEGF(vascular endothelial growth factor)injections can help reduce the growth of abnormal blood vessels and prevent them from leaking.Steroid injections can also be used to reduce inflammation in the eye.</p>
      </div>
      <br />

      <div className="bg-white rounded-lg shadow-md px-4 py-6">
        <h2 className="text-xl font-bold mb-2"> Vitrectomy</h2>
        <p className="text-gray-700 text-base">
        In advanced cases of diabetic retinopathy,vitrectomy may be necessary.This surgical procedure involves removing the vitreous gel that fills the center of the eye and repiacing it with a clear solution.This can help imorove vision by reducing the amount of scar tissue and blood in the eye.</p>
        </div>
        <br />
        <div className="bg-white rounded-lg shadow-md px-4 py-6">
        <h2 className="text-xl font-bold mb-2"> Anti-inflammatory Medication </h2>
        <p className="text-gray-700 text-base">
        Nonsteroidal anti-inflammatory drugs(NSAIDs) and corticosteroids can help reduce inflammation in the eye and prevent further damage.</p>
        </div>
</div>
  )
}

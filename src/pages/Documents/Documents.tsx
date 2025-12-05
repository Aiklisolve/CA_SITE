import Navbar from '../../components/Navbar'
import Sidebar from '../../components/Sidebar'
import Card from '../../components/Card'
import documentsData from '../../data/documents.json'

const Documents = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar isPortal />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">My Documents</h1>
            <p className="text-gray-600">Access all your uploaded and generated files</p>
          </div>

          {/* Client Uploaded Documents */}
          <Card className="mb-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-blue-50 p-3 rounded-lg">
                <span className="text-3xl">📤</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">Client Uploaded Documents</h2>
                <p className="text-sm text-gray-500">Files you have submitted to PRIDE</p>
              </div>
            </div>

            <div className="space-y-3">
              {documentsData.clientUploaded.map((doc) => (
                <div 
                  key={doc.id} 
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-100 p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <span className="text-3xl">📄</span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 mb-1">{doc.name}</p>
                      <div className="flex gap-4 text-xs text-gray-500">
                        <span>📅 {new Date(doc.uploadDate).toLocaleDateString('en-IN')}</span>
                        <span>📦 {doc.size}</span>
                        <span>🏷️ {doc.service}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-white hover:bg-gray-50 border-2 border-pride-red text-pride-red font-semibold px-4 py-2 rounded-lg transition-all">
                      View
                    </button>
                    <button className="bg-pride-red hover:bg-pride-dark-red text-white font-semibold px-4 py-2 rounded-lg transition-all">
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-6 border-t">
              <button className="btn-primary w-full">
                📤 Upload New Document
              </button>
            </div>
          </Card>

          {/* PRIDE Generated Documents */}
          <Card>
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-green-50 p-3 rounded-lg">
                <span className="text-3xl">📥</span>
              </div>
              <div>
                <h2 className="text-xl font-bold text-gray-900">PRIDE Generated Documents</h2>
                <p className="text-sm text-gray-500">Official documents prepared by our CAs</p>
              </div>
            </div>

            <div className="space-y-3">
              {documentsData.prideGenerated.map((doc) => (
                <div 
                  key={doc.id} 
                  className="flex items-center justify-between p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg hover:shadow-md transition-all group border border-green-100"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-green-100 p-3 rounded-lg group-hover:scale-110 transition-transform">
                      <span className="text-3xl">✅</span>
                    </div>
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <p className="font-semibold text-gray-900">{doc.name}</p>
                        <span className="bg-green-500 text-white text-xs px-2 py-0.5 rounded-full font-semibold">
                          Official
                        </span>
                      </div>
                      <div className="flex gap-4 text-xs text-gray-600">
                        <span>📅 {new Date(doc.generatedDate).toLocaleDateString('en-IN')}</span>
                        <span>📦 {doc.size}</span>
                        <span>🏷️ {doc.service}</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button className="bg-white hover:bg-gray-50 border-2 border-pride-red text-pride-red font-semibold px-4 py-2 rounded-lg transition-all">
                      View
                    </button>
                    <button className="bg-pride-red hover:bg-pride-dark-red text-white font-semibold px-4 py-2 rounded-lg transition-all">
                      Download
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          {/* Info Box */}
          <div className="mt-8 bg-yellow-50 border border-yellow-200 rounded-lg p-6">
            <h3 className="font-bold text-yellow-900 mb-2 flex items-center gap-2">
              <span className="text-2xl">💡</span>
              Document Management Tips
            </h3>
            <ul className="text-sm text-yellow-800 space-y-1 list-disc list-inside">
              <li>Upload clear and legible copies of documents</li>
              <li>Supported formats: PDF, JPG, PNG (Max 10MB)</li>
              <li>Generated documents are certified by our CAs</li>
              <li>Download and keep backup copies of all important documents</li>
            </ul>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Documents


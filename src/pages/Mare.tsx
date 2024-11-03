import React, { useState } from 'react';
import { Copy, Check, AlertCircle } from 'lucide-react';

const mareCredentials = {
  id: 'MSS-L571WWJHESAE',
  password: 'MoonlightHaven'
};

const mareRules = [
  'No harassment or inappropriate behavior',
  'Respect all participants and staff',
  'No unsolicited private messages',
  'No advertising or promotion',
  'Follow moderator instructions',
  'Keep discussions in appropriate channels',
  'No sharing of personal information',
  'Report any issues to moderators'
];

export default function Mare() {
  const [copied, setCopied] = useState<'id' | 'password' | null>(null);

  const copyToClipboard = (type: 'id' | 'password') => {
    const textToCopy = type === 'id' ? mareCredentials.id : mareCredentials.password;
    const textArea = document.createElement('textarea');
    textArea.value = textToCopy;
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      document.execCommand('copy');
      setCopied(type);
      setTimeout(() => setCopied(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    } finally {
      document.body.removeChild(textArea);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold magical-text text-center mb-8">Mare Access</h1>
          
          <div className="space-y-8">
            <div className="fantasy-card p-6">
              <div className="flex items-center gap-2 mb-6">
                <AlertCircle className="text-purple-400" size={24} />
                <h2 className="text-xl font-bold text-white">Mare Rules</h2>
              </div>
              <ul className="space-y-3 mb-6">
                {mareRules.map((rule, index) => (
                  <li key={index} className="flex items-start gap-2 text-gray-300">
                    <span className="text-purple-400 mt-1">•</span>
                    <span>{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="fantasy-card p-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Mare ID</label>
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-gray-800 p-3 rounded-lg text-purple-300 font-mono select-all">
                  {mareCredentials.id}
                </code>
                <button
                  onClick={() => copyToClipboard('id')}
                  className="p-2 hover:bg-purple-600/20 rounded-lg transition-colors"
                  aria-label="Copy Mare ID"
                >
                  {copied === 'id' ? (
                    <Check className="text-green-400" size={20} />
                  ) : (
                    <Copy className="text-purple-400" size={20} />
                  )}
                </button>
              </div>
            </div>

            <div className="fantasy-card p-6">
              <label className="block text-sm font-medium text-gray-300 mb-2">Password</label>
              <div className="flex items-center gap-2">
                <code className="flex-1 bg-gray-800 p-3 rounded-lg text-purple-300 font-mono select-all">
                  {mareCredentials.password}
                </code>
                <button
                  onClick={() => copyToClipboard('password')}
                  className="p-2 hover:bg-purple-600/20 rounded-lg transition-colors"
                  aria-label="Copy Password"
                >
                  {copied === 'password' ? (
                    <Check className="text-green-400" size={20} />
                  ) : (
                    <Copy className="text-purple-400" size={20} />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
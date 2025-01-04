'use client'

import { addPostAction } from '@/posts'
import { useState } from 'react'

type FormData = {
  title: string
  body: string
  poster: File | null
}

const AddPost = () => {
  const [formData, setFormData] = useState<FormData>({
    title: '',
    body: '',
    poster: null,
  })

  console.log(formData)

  const handleInputChange = (e: any) => {
    const { name, value } = e.target
    setFormData({ ...formData, [name]: value })
  }

  const handleFileChange = (e: any) => {
    setFormData({ ...formData, poster: e.target.files[0] })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formData.poster) {
      alert('Please upload a poster image.')
      return
    }
    try {
      await addPostAction({
        title: formData.title,
        body: formData.body,
        poster: formData.poster,
      })
      alert('Blog post created successfully!')
    } catch (error) {
      console.error('Error adding post:', error)
    }
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white text-gray-700 p-8 rounded-lg shadow-md"
      >
        <h1 className="text-2xl font-semibold mb-6 text-gray-700">Add New Blog Post</h1>

        <div className="mb-4">
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-4 py-2 text-gray-700 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="body" className="block text-sm font-medium text-gray-700">
            Body
          </label>
          <textarea
            id="body"
            name="body"
            value={formData.body}
            onChange={handleInputChange}
            required
            className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            rows={6}
          ></textarea>
        </div>

        <div className="mb-4">
          <label htmlFor="poster" className="block text-sm font-medium text-gray-700">
            Poster Image
          </label>
          <input
            type="file"
            id="poster"
            name="poster"
            onChange={handleFileChange}
            required
            className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-blue-100 file:text-blue-700 hover:file:bg-blue-200"
          />
        </div>

        <div className="mt-6">
          <button
            type="submit"
            className="w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1"
          >
            Add Post
          </button>
        </div>
      </form>
    </div>
  )
}

export default AddPost

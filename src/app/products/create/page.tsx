'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Loader2, Upload } from 'lucide-react'

export default function CreateProduct() {
    const [listingType, setListingType] = useState('barter')
    const [showPaymentSection, setShowPaymentSection] = useState(false)
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault()
        setIsSubmitting(true)
        await new Promise(resolve => setTimeout(resolve, 2000))
        setIsSubmitting(false)
        alert('Product created successfully!')
    }

    const fadeInUp = {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
    }

    return (
        <div className="min-h-screen bg-gradient-to-b from-purple-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
            <motion.div
                className="max-w-3xl mx-auto"
                initial="hidden"
                animate="visible"
                variants={fadeInUp}
            >
                <Card>
                    <CardHeader>
                        <CardTitle>Create a New Product Listing</CardTitle>
                        <CardDescription>
                            List your item for barter or sale on BarterBazaar
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit}>
                            <div className="space-y-6">
                                <div>
                                    <Label htmlFor="product-name">Product Name</Label>
                                    <Input id="product-name" placeholder="Enter product name" required />
                                </div>

                                <div>
                                    <Label htmlFor="product-description">Description</Label>
                                    <Textarea id="product-description" placeholder="Describe your product" required />
                                </div>

                                <div>
                                    <Label htmlFor="product-category">Category</Label>
                                    <Select required>
                                        <SelectTrigger id="product-category">
                                            <SelectValue placeholder="Select a category" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="electronics">Electronics</SelectItem>
                                            <SelectItem value="clothing">Clothing</SelectItem>
                                            <SelectItem value="books">Books</SelectItem>
                                            <SelectItem value="home">Home & Garden</SelectItem>
                                            <SelectItem value="other">Other</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label htmlFor="product-condition">Condition</Label>
                                    <Select required>
                                        <SelectTrigger id="product-condition">
                                            <SelectValue placeholder="Select condition" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value="new">New</SelectItem>
                                            <SelectItem value="like-new">Like New</SelectItem>
                                            <SelectItem value="good">Good</SelectItem>
                                            <SelectItem value="fair">Fair</SelectItem>
                                            <SelectItem value="poor">Poor</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>

                                <div>
                                    <Label>Upload Images</Label>
                                    <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                        <div className="space-y-1 text-center">
                                            <Upload className="mx-auto h-12 w-12 text-gray-400" />
                                            <div className="flex text-sm text-gray-600">
                                                <label htmlFor="file-upload" className="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                                    <span>Upload a file</span>
                                                    <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
                                                </label>
                                                <p className="pl-1">or drag and drop</p>
                                            </div>
                                            <p className="text-xs text-gray-500">PNG, JPG, GIF up to 10MB</p>
                                        </div>
                                    </div>
                                </div>

                                <div>
                                    <Label>Listing Type</Label>
                                    <RadioGroup defaultValue="barter" onValueChange={(value) => setListingType(value)}>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="barter" id="barter" />
                                            <Label htmlFor="barter">Barter</Label>
                                        </div>
                                        <div className="flex items-center space-x-2">
                                            <RadioGroupItem value="sale" id="sale" />
                                            <Label htmlFor="sale">For Sale</Label>
                                        </div>
                                    </RadioGroup>
                                </div>

                                {listingType === 'barter' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Label htmlFor="barter-items">Items Interested in Bartering For</Label>
                                        <Textarea id="barter-items" placeholder="List items you're interested in trading for" />
                                    </motion.div>
                                )}

                                {listingType === 'sale' && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <Label htmlFor="price">Price</Label>
                                        <Input id="price" type="number" placeholder="Enter price" min="0" step="0.01" />
                                    </motion.div>
                                )}

                                <div className="flex items-center space-x-2">
                                    <Switch id="payment-option" onCheckedChange={setShowPaymentSection} />
                                    <Label htmlFor="payment-option">Enable Instant Payment</Label>
                                </div>

                                {showPaymentSection && (
                                    <motion.div
                                        initial={{ opacity: 0, height: 0 }}
                                        animate={{ opacity: 1, height: 'auto' }}
                                        exit={{ opacity: 0, height: 0 }}
                                        transition={{ duration: 0.3 }}
                                        className="space-y-4"
                                    >
                                        <div>
                                            <Label htmlFor="card-number">Card Number</Label>
                                            <Input id="card-number" placeholder="1234 5678 9012 3456" required />
                                        </div>
                                        <div className="flex space-x-4">
                                            <div className="flex-1">
                                                <Label htmlFor="expiry-date">Expiry Date</Label>
                                                <Input id="expiry-date" placeholder="MM/YY" required />
                                            </div>
                                            <div className="flex-1">
                                                <Label htmlFor="cvv">CVV</Label>
                                                <Input id="cvv" placeholder="123" required />
                                            </div>
                                        </div>
                                        <div>
                                            <Label htmlFor="name-on-card">Name on Card</Label>
                                            <Input id="name-on-card" placeholder="John Doe" required />
                                        </div>
                                    </motion.div>
                                )}
                            </div>

                            <CardFooter className="flex justify-end mt-6">
                                <Button type="submit" disabled={isSubmitting}>
                                    {isSubmitting ? (
                                        <>
                                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                            Creating...
                                        </>
                                    ) : (
                                        'Create Listing'
                                    )}
                                </Button>
                            </CardFooter>
                        </form>
                    </CardContent>
                </Card>
            </motion.div>
        </div>
    );
}
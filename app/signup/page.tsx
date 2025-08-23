// import React, { useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Input } from '@/components/ui/input';
// import { Label } from '@/components/ui/label';
// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { Alert, AlertDescription } from '@/components/ui/alert';
// import { Checkbox } from '@/components/ui/checkbox';
// import { Eye, EyeOff, Mail, Lock, User, AlertCircle, CheckCircle } from 'lucide-react';

// export default function SignUpForm() {
//   const [formData, setFormData] = useState({
//     firstName: '',
//     lastName: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     agreeToTerms: false
//   });
  
//   const [showPassword, setShowPassword] = useState(false);
//   const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [isSubmitted, setIsSubmitted] = useState(false);

//   const validateForm = () => {
//     const newErrors = {};

//     if (!formData.firstName.trim()) {
//       newErrors.firstName = 'First name is required';
//     }

//     if (!formData.lastName.trim()) {
//       newErrors.lastName = 'Last name is required';
//     }

//     if (!formData.email.trim()) {
//       newErrors.email = 'Email is required';
//     } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//     }

//     if (!formData.password) {
//       newErrors.password = 'Password is required';
//     } else if (formData.password.length < 8) {
//       newErrors.password = 'Password must be at least 8 characters long';
//     }

//     if (!formData.confirmPassword) {
//       newErrors.confirmPassword = 'Please confirm your password';
//     } else if (formData.password !== formData.confirmPassword) {
//       newErrors.confirmPassword = 'Passwords do not match';
//     }

//     if (!formData.agreeToTerms) {
//       newErrors.agreeToTerms = 'You must agree to the terms and conditions';
//     }

//     return newErrors;
//   };

//   const handleInputChange = (e) => {
//     const { name, value, type, checked } = e.target;
//     setFormData(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value
//     }));

//     // Clear error when user starts typing
//     if (errors[name]) {
//       setErrors(prev => ({
//         ...prev,
//         [name]: ''
//       }));
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const newErrors = validateForm();
    
//     if (Object.keys(newErrors).length === 0) {
//       setIsSubmitted(true);
//       // Here you would typically send data to your backend
//       console.log('Form submitted:', formData);
//     } else {
//       setErrors(newErrors);
//     }
//   };

//   if (isSubmitted) {
//     return (
//       <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//         <Card className="w-full max-w-md">
//           <CardContent className="pt-6">
//             <div className="text-center">
//               <CheckCircle className="mx-auto h-12 w-12 text-green-500 mb-4" />
//               <h2 className="text-2xl font-bold text-gray-900 mb-2">Account Created!</h2>
//               <p className="text-gray-600">
//                 Welcome aboard! We've sent a confirmation email to {formData.email}.
//               </p>
//             </div>
//           </CardContent>
//         </Card>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
//       <Card className="w-full max-w-md">
//         <CardHeader className="space-y-1">
//           <CardTitle className="text-2xl font-bold text-center">Create an account</CardTitle>
//           <CardDescription className="text-center">
//             Enter your details below to create your account
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <div className="space-y-4">
//             <div className="grid grid-cols-2 gap-4">
//               <div className="space-y-2">
//                 <Label htmlFor="firstName">First name</Label>
//                 <div className="relative">
//                   <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                   <Input
//                     id="firstName"
//                     name="firstName"
//                     type="text"
//                     placeholder="John"
//                     value={formData.firstName}
//                     onChange={handleInputChange}
//                     className={`pl-10 ${errors.firstName ? 'border-red-500' : ''}`}
//                   />
//                 </div>
//                 {errors.firstName && (
//                   <p className="text-sm text-red-500 flex items-center gap-1">
//                     <AlertCircle className="h-4 w-4" />
//                     {errors.firstName}
//                   </p>
//                 )}
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="lastName">Last name</Label>
//                 <Input
//                   id="lastName"
//                   name="lastName"
//                   type="text"
//                   placeholder="Doe"
//                   value={formData.lastName}
//                   onChange={handleInputChange}
//                   className={errors.lastName ? 'border-red-500' : ''}
//                 />
//                 {errors.lastName && (
//                   <p className="text-sm text-red-500 flex items-center gap-1">
//                     <AlertCircle className="h-4 w-4" />
//                     {errors.lastName}
//                   </p>
//                 )}
//               </div>
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="email">Email</Label>
//               <div className="relative">
//                 <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                 <Input
//                   id="email"
//                   name="email"
//                   type="email"
//                   placeholder="john@example.com"
//                   value={formData.email}
//                   onChange={handleInputChange}
//                   className={`pl-10 ${errors.email ? 'border-red-500' : ''}`}
//                 />
//               </div>
//               {errors.email && (
//                 <p className="text-sm text-red-500 flex items-center gap-1">
//                   <AlertCircle className="h-4 w-4" />
//                   {errors.email}
//                 </p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="password">Password</Label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                 <Input
//                   id="password"
//                   name="password"
//                   type={showPassword ? 'text' : 'password'}
//                   placeholder="••••••••"
//                   value={formData.password}
//                   onChange={handleInputChange}
//                   className={`pl-10 pr-10 ${errors.password ? 'border-red-500' : ''}`}
//                 />
//                 <button
//                   type="button"
//                   className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
//                   onClick={() => setShowPassword(!showPassword)}
//                 >
//                   {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                 </button>
//               </div>
//               {errors.password && (
//                 <p className="text-sm text-red-500 flex items-center gap-1">
//                   <AlertCircle className="h-4 w-4" />
//                   {errors.password}
//                 </p>
//               )}
//             </div>

//             <div className="space-y-2">
//               <Label htmlFor="confirmPassword">Confirm password</Label>
//               <div className="relative">
//                 <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
//                 <Input
//                   id="confirmPassword"
//                   name="confirmPassword"
//                   type={showConfirmPassword ? 'text' : 'password'}
//                   placeholder="••••••••"
//                   value={formData.confirmPassword}
//                   onChange={handleInputChange}
//                   className={`pl-10 pr-10 ${errors.confirmPassword ? 'border-red-500' : ''}`}
//                 />
//                 <button
//                   type="button"
//                   className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
//                   onClick={() => setShowConfirmPassword(!showConfirmPassword)}
//                 >
//                   {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
//                 </button>
//               </div>
//               {errors.confirmPassword && (
//                 <p className="text-sm text-red-500 flex items-center gap-1">
//                   <AlertCircle className="h-4 w-4" />
//                   {errors.confirmPassword}
//                 </p>
//               )}
//             </div>

//             <div className="flex items-center space-x-2">
//               <Checkbox
//                 id="agreeToTerms"
//                 name="agreeToTerms"
//                 checked={formData.agreeToTerms}
//                 onCheckedChange={(checked) => 
//                   setFormData(prev => ({ ...prev, agreeToTerms: checked }))
//                 }
//                 className={errors.agreeToTerms ? 'border-red-500' : ''}
//               />
//               <Label
//                 htmlFor="agreeToTerms"
//                 className="text-sm font-normal cursor-pointer"
//               >
//                 I agree to the{' '}
//                 <a href="#" className="text-blue-600 hover:underline">
//                   Terms of Service
//                 </a>{' '}
//                 and{' '}
//                 <a href="#" className="text-blue-600 hover:underline">
//                   Privacy Policy
//                 </a>
//               </Label>
//             </div>
//             {errors.agreeToTerms && (
//               <p className="text-sm text-red-500 flex items-center gap-1">
//                 <AlertCircle className="h-4 w-4" />
//                 {errors.agreeToTerms}
//               </p>
//             )}

//             <Button type="button" onClick={handleSubmit} className="w-full">
//               Create account
//             </Button>
//           </div>
//         </CardContent>
//         <CardFooter>
//           <p className="text-center text-sm text-gray-600 w-full">
//             Already have an account?{' '}
//             <a href="#" className="text-blue-600 hover:underline font-medium">
//               Sign in
//             </a>
//           </p>
//         </CardFooter>
//       </Card>
//     </div>
//   );
// }
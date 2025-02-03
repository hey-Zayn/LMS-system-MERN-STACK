import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useState } from "react";
import {
  useLoginUserMutation,
  useRegisterUserMutation,
} from "@/features/api/AuthApi";
import { Loader2 } from "lucide-react";
import { useEffect } from "react";
import { toast } from "sonner"; 
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [signupInput, setSignupInput] = useState({
    name: "",
    userName: "",
    email: "",
    password: "",
  });
  const [loginInput, setLoginInput] = useState({ email: "", password: "" });

  const [
    registerUser,
    {
      data: registerData,
      error: registerError,
      isLoading: registerIsLoading,
      isSuccess: registerIsSuccess,
    },
  ] = useRegisterUserMutation();


  const [
    loginUser,
    {
      data: loginData,
      error: loginError,
      isLoading: loginIsLoading,
      isSuccess: loginIsSuccess,
    },
  ] = useLoginUserMutation();

  const changeInputHandler = (e, type) => {
    const { name, value } = e.target;
    if (type === "signup") {
      setSignupInput({ ...signupInput, [name]: value });
    } else {
      setLoginInput({ ...loginInput, [name]: value });
    }
  };
  const handelRegistation = async (type) => {
    const inputData = type === "signup" ? signupInput : loginInput;
    const action = type === "signup" ? registerUser : loginUser;
    await action(inputData);
    // console.log(inputData);
  };
 
  const navigate = useNavigate();  

  
  useEffect(() => {
    if (registerIsSuccess && registerData) {
      toast.success(registerData.message || "Signup Successfully.");
    }
    if (registerError) {
      // Check if registerError is defined before accessing its properties
      toast.error(registerError.data.message || "Signup Failed");
    }
    if (loginIsSuccess && loginData) {
      toast.success(loginData.message || "Login Successfully");
      navigate("/");
      
    }
    if (loginError) {
      // Check if loginError is defined before accessing its properties
      toast.error(loginError.data.message || "Login Failed");
    }
  }, [loginIsLoading, registerIsLoading, loginData, registerData, loginError, registerError]);




  return (
    <div className="flex items-center justify-center w-full mt-20">
      <Tabs defaultValue="login" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signup">Signup</TabsTrigger>
          <TabsTrigger value="login">Login</TabsTrigger>
        </TabsList>
        <TabsContent value="signup">
          <Card>
            <CardHeader>
              <CardTitle>Signup</CardTitle>
              <CardDescription>
                Create an account and Click signup when you're done.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="name">Name</Label>
                <Input
                  type="text"
                  placeholder="Pedro Duarte"
                  required={true}
                  onChange={(e) => {
                    changeInputHandler(e, "signup");
                  }}
                  name="name"
                  value={signupInput.name}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Username</Label>
                <Input
                  type="text"
                  placeholder="@peduarte"
                  required={true}
                  onChange={(e) => {
                    changeInputHandler(e, "signup");
                  }}
                  name="userName"
                  value={signupInput.userName}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">Email</Label>
                <Input
                  type="email"
                  placeholder="email@me.com"
                  required={true}
                  name="email"
                  value={signupInput.email}
                  onChange={(e) => {
                    changeInputHandler(e, "signup");
                  }}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="username">password</Label>
                <Input
                  type="password"
                  placeholder="password"
                  required={true}
                  onChange={(e) => {
                    changeInputHandler(e, "signup");
                  }}
                  name="password"
                  value={signupInput.password}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
            
                onClick={() => {
                  handelRegistation("signup");
                }}
              >
               {registerIsLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  </>
                ) : (
                  "Signup"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>

        <TabsContent value="login">
          <Card>
            <CardHeader>
              <CardTitle>Login</CardTitle>
              <CardDescription>
                Login your password here. After signup, you'll be logged in.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <div className="space-y-1">
                <Label htmlFor="current">Email</Label>
                <Input
                  type="email"
                  placeholder="email@me.com"
                  required={true}
                  onChange={(e) => {
                    changeInputHandler(e, "login");
                  }}
                  name="email"
                  value={loginInput.email}
                />
              </div>
              <div className="space-y-1">
                <Label htmlFor="new">Password</Label>
                <Input
                  type="password"
                  placeholder="password"
                  required={true}
                  onChange={(e) => {
                    changeInputHandler(e, "login");
                  }}
                  name="password"
                  value={loginInput.password}
                />
              </div>
            </CardContent>
            <CardFooter>
              <Button
                disabled={loginIsLoading}
                onClick={() => {
                  handelRegistation("login");
                }}
              >
                {loginIsLoading ? (
                  <>
                    <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  </>
                ) : (
                  "Login"
                )}
              </Button>
            </CardFooter>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default Login;

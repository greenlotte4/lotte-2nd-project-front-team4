import React, { useState } from "react";
import ProjectView from "@/components/project/ProjectView";
import { Container } from "@/components/project/ProjectStyles";

  const Dashboard = () => {
    return (
      <Container>
        
        <ProjectView />
      </Container>
    );
  };
  
  export default Dashboard;

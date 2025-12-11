terraform {
  required_providers {
    render = {
      source  = "render-oss/render"
      version = "1.5.0"
    }
  }
}

provider "render" {
  api_key = ""
}

# -------------------------------
# Base de Datos PostgreSQL en Render
# -------------------------------
resource "render_postgresql" "db" {
  name     = "db-juegos"
  plan     = "starter"
  database = "juegos_db"
  user     = santos
  password = v3hQtpRGz8tVPByCV4IJB8CjWdlo2tHC
}

# -------------------------------
# Servicio Web Node.js (Docker)
# -------------------------------
resource "render_web_service" "api" {
  name        = "api-juegos"
  type        = "web_service"
  env         = "docker"
  repo        = https://github.com/SantosK145/RA-Desarrollo-web.git
  branch      = var.branch
  auto_deploy = true

  service_details {
    plan = "starter"
  }

  env_vars = {
    DATABASE_URL = postgresql://santos:v3hQtpRGz8tVPByCV4IJB8CjWdlo2tHC@dpg-d4t7kdur433s7388cs00-a.oregon-postgres.render.com/docker_i9jo
  }
}

output "api_url" {
  value = ""
}

output "database_url" {
  value = "postgresql://santos:v3hQtpRGz8tVPByCV4IJB8CjWdlo2tHC@dpg-d4t7kdur433s7388cs00-a.oregon-postgres.render.com/docker_i9jo"
}
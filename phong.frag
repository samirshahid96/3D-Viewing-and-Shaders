
#version 330 core
out vec4 color;

in vec3 FragPos;  
in vec3 Normal;  
  
uniform vec3 lightPos; 
uniform vec3 viewPos;
uniform vec3 lightColor;
uniform vec3 objectColor;
//#include iostream
//using namespace std;
void main()
{
    // TODO: Replace with your code...
    // If gl_Position was set correctly, this gives a totally red cube
    //color = vec4(vec3(1.f,0.f,0.f), 1.0f);
	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////Intialize

	float s_S = 0.50;
	float A_S = 0.10;
	vec3 norm = normalize(Normal);
    vec3 ambient = A_S * lightColor;
	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////Light
	//cout << "error here 1"; //error check 1
    vec3 light_direction = normalize(lightPos - FragPos);
    vec3 reflect_direction = reflect(-light_direction, norm);
    float diff_vector = max(dot(norm, light_direction), 0.00);
	vec3 view_direction = normalize(viewPos - FragPos);
	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////
	//cout << "error here 2"; //error check 2
    float s = pow(max(dot(view_direction, reflect_direction), 0.00), 64);
    vec3 final_diff_vector = diff_vector * lightColor;
    vec3 ss = s_S * s * lightColor;
    color = vec4((ambient + final_diff_vector + ss) * objectColor, 1.0);
	//////////////////////////////////////////////////////////////////
	//////////////////////////////////////////////////////////////////
} 
